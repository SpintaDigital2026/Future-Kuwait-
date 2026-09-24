import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { CalendarDays, CheckCircle2, MessageSquareText, Phone } from "lucide-react";
import heroAsset from "@/assets/client-2026/contact-speak-to-an-expert.jpg.asset.json";
import futureLogo from "@/assets/future-logo.png.asset.json";
import { SiteNav } from "@/components/SiteNav";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  bookingIcs,
  downloadIcs,
  mailTo,
  telUrl,
  whatsappUrl,
} from "@/lib/contact";
import { listBookedSlots, submitContactEnquiry } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact FCC — Speak to an Expert" },
      {
        name: "description",
        content:
          "Leave a message, book a call, or WhatsApp FCC. Enquiries go to inquiry@fcc-solutions.co.uk.",
      },
    ],
  }),
  component: ContactPage,
});

type Channel = "message" | "booking" | "whatsapp";

const INTERESTS = [
  "Microsoft",
  "Cyber Security",
  "Customer Experience",
  "AI & Automation",
  "General enquiry",
];

const TIME_SLOTS = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00"];

function nextWeekdays(count = 12) {
  const days: string[] = [];
  const cursor = new Date();
  cursor.setDate(cursor.getDate() + 1);
  while (days.length < count) {
    const day = cursor.getDay();
    if (day !== 0 && day !== 6) days.push(cursor.toISOString().slice(0, 10));
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

function ContactPage() {
  const [channel, setChannel] = useState<Channel>("message");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as Channel;
    if (hash === "message" || hash === "booking" || hash === "whatsapp") setChannel(hash);
  }, []);

  function selectChannel(next: Channel) {
    setChannel(next);
    window.history.replaceState(null, "", `/contact#${next}`);
    document.getElementById("connect")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="theme-v2 bg-background text-ink">
      <SiteNav />
      <Hero onPick={selectChannel} />
      <section id="connect" className="relative bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_48%)] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="section-kicker text-brand">How can we help?</span>
            <h2 className="mt-5 font-sans text-4xl md:text-5xl leading-[1.05] tracking-tight">
              Choose the easiest way to{" "}
              <span className="italic text-brand">start a conversation</span>.
            </h2>
            <p className="mt-5 text-lg text-ink-soft leading-relaxed">
              Write to us, pick a call time, or chat on WhatsApp. We will come back with a clear next step.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-5">
            <ChannelCard
              active={channel === "message"}
              onClick={() => selectChannel("message")}
              icon={<MessageSquareText className="h-6 w-6" />}
              title="Leave a message"
              body="Tell us what you need. We will reply to your email."
              action="Write a note"
            />
            <ChannelCard
              active={channel === "booking"}
              onClick={() => selectChannel("booking")}
              icon={<CalendarDays className="h-6 w-6" />}
              title="Book a call"
              body="Choose a day and time that works. We will hold the slot."
              action="Pick a time"
            />
            <ChannelCard
              active={channel === "whatsapp"}
              onClick={() => selectChannel("whatsapp")}
              icon={<Phone className="h-6 w-6" />}
              title="Chat on WhatsApp"
              body="Message the team and get a faster reply."
              action="Start a chat"
            />
          </div>

          <div className="mt-10 overflow-hidden rounded-[28px] border border-hairline bg-white shadow-elevated">
            <div className="h-1.5 bg-gradient-to-r from-brand via-brand-tint to-brand-deep" />
            <div className="p-6 sm:p-8 md:p-12">
              {channel === "message" && <MessageForm />}
              {channel === "booking" && <BookingForm />}
              {channel === "whatsapp" && <WhatsAppPanel />}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function ChannelCard({
  active,
  onClick,
  icon,
  title,
  body,
  action,
}: {
  active: boolean;
  onClick: () => void;
  icon: ReactNode;
  title: string;
  body: string;
  action: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative text-left rounded-3xl border p-7 transition-all duration-300 ${
        active
          ? "border-brand bg-white shadow-elevated -translate-y-1 ring-4 ring-brand/10"
          : "border-hairline bg-white/70 hover:-translate-y-1 hover:border-brand/25 hover:shadow-soft"
      }`}
    >
      {active && (
        <span className="absolute right-5 top-5 inline-flex size-7 items-center justify-center rounded-full bg-brand text-white">
          <CheckCircle2 className="h-4 w-4" />
        </span>
      )}
      <div
        className={`inline-flex size-14 items-center justify-center rounded-2xl transition-colors ${
          active ? "bg-brand text-white" : "bg-brand-wash text-brand group-hover:bg-brand group-hover:text-white"
        }`}
      >
        {icon}
      </div>
      <div className="mt-6 font-sans text-2xl tracking-tight">{title}</div>
      <p className="mt-2 text-sm text-ink-soft leading-relaxed">{body}</p>
      <span className={`mt-5 inline-flex text-sm font-medium ${active ? "text-brand" : "text-ink-soft group-hover:text-brand"}`}>
        {action} →
      </span>
    </button>
  );
}

function Hero({ onPick }: { onPick: (channel: Channel) => void }) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[700px] w-[700px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--brand) 60%, transparent), transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-20 lg:pt-24 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-8">
              <span className="section-kicker text-brand-tint">Speak to an expert</span>
              <span className="h-px w-10 bg-brand-tint/40" />
            </div>
            <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              Let’s talk about your{" "}
              <span className="italic text-brand-tint">next step</span>.
            </h1>
            <p className="mt-8 text-lg text-white/70 leading-relaxed max-w-xl">
              Share a short brief, book a call, or message us on WhatsApp. An FCC specialist will
              help you from there.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onPick("message")}
                className="rounded-full bg-brand px-6 py-3 text-sm font-medium hover:bg-brand-deep transition-colors"
              >
                Leave a message
              </button>
              <button
                type="button"
                onClick={() => onPick("booking")}
                className="rounded-full bg-white text-ink px-6 py-3 text-sm font-medium hover:bg-brand-wash transition-colors"
              >
                Book a call
              </button>
              <button
                type="button"
                onClick={() => onPick("whatsapp")}
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors"
              >
                WhatsApp us
              </button>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-6 bg-brand/20 rounded-3xl -z-10 blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-elevated ring-1 ring-white/10">
              <img
                src={heroAsset.url}
                alt="Speak with an FCC expert"
                className="w-full aspect-[16/10] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

const fieldClass =
  "w-full rounded-2xl border border-hairline bg-muted/40 px-4 py-3.5 text-sm text-ink outline-none transition-colors focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20";

function MessageForm() {
  const submit = useServerFn(submitContactEnquiry);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setStatus("sending");
    setError("");
    try {
      await submit({
        data: {
          kind: "message",
          name: String(data.get("name") || ""),
          email: String(data.get("email") || ""),
          company: String(data.get("company") || ""),
          topic: String(data.get("interest") || ""),
          message: String(data.get("message") || ""),
        },
      });
      setStatus("sent");
    } catch (err) {
      window.location.href = mailTo(
        `Website message from ${String(data.get("name") || "")}`,
        `Name: ${String(data.get("name") || "")}\nEmail: ${String(data.get("email") || "")}\nCompany: ${String(data.get("company") || "")}\nTopic: ${String(data.get("interest") || "")}\n\n${String(data.get("message") || "")}`,
      );
      setStatus("error");
      setError(
        err instanceof Error
          ? `${err.message} Your email app has been opened to send this to ${CONTACT_EMAIL}.`
          : `Could not save the message. Your email app has been opened for ${CONTACT_EMAIL}.`,
      );
    }
  }

  if (status === "sent") {
    return (
      <Thanks
        title="Thanks — we have your message"
        text={`The team will reply to the email you entered. You can also reach us at ${CONTACT_EMAIL}.`}
      />
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
      <div className="md:col-span-2">
        <h3 className="font-sans text-2xl md:text-3xl tracking-tight">Leave a message</h3>
        <p className="mt-2 text-ink-soft">A few details are enough. We will get back to you shortly.</p>
      </div>
      <Field label="Your name">
        <input name="name" required className={fieldClass} placeholder="Jane Smith" />
      </Field>
      <Field label="Work email">
        <input name="email" type="email" required className={fieldClass} placeholder="jane@company.com" />
      </Field>
      <Field label="Company">
        <input name="company" className={fieldClass} placeholder="Company name" />
      </Field>
      <Field label="What is this about?">
        <select name="interest" className={fieldClass} defaultValue="General enquiry">
          {INTERESTS.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </Field>
      <div className="md:col-span-2">
        <Field label="Your message">
          <textarea name="message" required rows={5} className={fieldClass} placeholder="What are you looking to solve?" />
        </Field>
      </div>
      {error && <p className="md:col-span-2 text-sm text-red-600">{error}</p>}
      <div className="md:col-span-2 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-white hover:bg-brand-deep transition-colors disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
          <span aria-hidden>→</span>
        </button>
        <p className="text-sm text-ink-soft">We reply from {CONTACT_EMAIL}</p>
      </div>
    </form>
  );
}

function BookingForm() {
  const submit = useServerFn(submitContactEnquiry);
  const listSlots = useServerFn(listBookedSlots);
  const dates = useMemo(() => nextWeekdays(), []);
  const [booked, setBooked] = useState<{ date: string; time: string }[]>([]);
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [selectedTime, setSelectedTime] = useState("10:00");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [summary, setSummary] = useState<{ date: string; time: string } | null>(null);

  useEffect(() => {
    listSlots().then(setBooked).catch(() => setBooked([]));
  }, [listSlots]);

  const taken = new Set(booked.map((slot) => `${slot.date}|${slot.time}`));

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      kind: "booking" as const,
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      topic: "Discovery call",
      message: String(data.get("topic") || ""),
      preferred_date: selectedDate,
      preferred_time: selectedTime,
    };
    setStatus("sending");
    setError("");
    try {
      await submit({ data: payload });
      downloadIcs(
        `fcc-call-${payload.preferred_date}.ics`,
        bookingIcs({
          name: payload.name,
          email: payload.email,
          date: payload.preferred_date,
          time: payload.preferred_time,
          topic: payload.message,
        }),
      );
      setSummary({ date: payload.preferred_date, time: payload.preferred_time });
      setBooked((prev) => [...prev, { date: payload.preferred_date, time: payload.preferred_time }]);
      setStatus("sent");
    } catch (err) {
      window.location.href = mailTo(
        `Meeting request from ${payload.name}`,
        `Name: ${payload.name}\nEmail: ${payload.email}\nPreferred date: ${payload.preferred_date}\nPreferred time: ${payload.preferred_time} UK\n\n${payload.message}`,
      );
      setStatus("error");
      setError(
        err instanceof Error
          ? `${err.message} Your email app has been opened to send this booking to ${CONTACT_EMAIL}.`
          : `Could not reserve the slot yet. Your email app has been opened for ${CONTACT_EMAIL}.`,
      );
    }
  }

  if (status === "sent" && summary) {
    const label = new Date(`${summary.date}T12:00:00`).toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
    return (
      <Thanks
        title="Your call is booked"
        text={`${label} at ${summary.time} UK is reserved. A calendar invite has downloaded for you.`}
      />
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
      <div className="md:col-span-2">
        <h3 className="font-sans text-2xl md:text-3xl tracking-tight">Book a call</h3>
        <p className="mt-2 text-ink-soft">Pick a weekday and a time. Taken slots are shown as booked.</p>
      </div>
      <Field label="Your name">
        <input name="name" required className={fieldClass} placeholder="Jane Smith" />
      </Field>
      <Field label="Work email">
        <input name="email" type="email" required className={fieldClass} placeholder="jane@company.com" />
      </Field>
      <div className="md:col-span-2">
        <p className="text-sm font-medium text-ink">Preferred day</p>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {dates.map((day) => {
            const active = selectedDate === day;
            return (
              <button
                key={day}
                type="button"
                onClick={() => setSelectedDate(day)}
                className={`shrink-0 rounded-2xl border px-4 py-3 text-left transition-colors ${
                  active ? "border-brand bg-brand-wash text-ink" : "border-hairline bg-muted/30 hover:border-brand/30"
                }`}
              >
                <div className="text-[11px] uppercase tracking-wide text-ink-soft">
                  {new Date(`${day}T12:00:00`).toLocaleDateString("en-GB", { weekday: "short" })}
                </div>
                <div className="mt-1 text-sm font-medium">
                  {new Date(`${day}T12:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <div className="md:col-span-2">
        <p className="text-sm font-medium text-ink">Preferred time</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {TIME_SLOTS.map((slot) => {
            const busy = taken.has(`${selectedDate}|${slot}`);
            const active = selectedTime === slot && !busy;
            return (
              <button
                key={slot}
                type="button"
                disabled={busy}
                onClick={() => setSelectedTime(slot)}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  busy
                    ? "cursor-not-allowed bg-muted text-ink-soft/50"
                    : active
                      ? "bg-brand text-white"
                      : "bg-muted/60 text-ink hover:bg-brand-wash"
                }`}
              >
                {busy ? `${slot} booked` : `${slot} UK`}
              </button>
            );
          })}
        </div>
      </div>
      <div className="md:col-span-2">
        <Field label="What should we cover?">
          <textarea name="topic" required rows={4} className={fieldClass} placeholder="A short note on the meeting goal" />
        </Field>
      </div>
      {error && <p className="md:col-span-2 text-sm text-red-600">{error}</p>}
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-white hover:bg-brand-deep transition-colors disabled:opacity-60"
        >
          {status === "sending" ? "Booking…" : "Confirm this time"}
          <span aria-hidden>→</span>
        </button>
      </div>
    </form>
  );
}

function WhatsAppPanel() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [topic, setTopic] = useState("General enquiry");
  const [note, setNote] = useState("");

  const composed = [
    "Hello FCC, I would like to speak with an expert.",
    "",
    `Name: ${name || "—"}`,
    company ? `Company: ${company}` : null,
    `Topic: ${topic}`,
    "",
    note || "Please get in touch.",
  ]
    .filter((line) => line !== null)
    .join("\n");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.assign(whatsappUrl(composed));
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8 lg:grid-cols-12 items-start">
      <div className="lg:col-span-7 grid gap-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <h3 className="font-sans text-2xl md:text-3xl tracking-tight">Chat on WhatsApp</h3>
          <p className="mt-2 text-ink-soft leading-relaxed">
            Fill this in and tap Send. WhatsApp will open with your message ready — tap Send once more there.
          </p>
        </div>
        <Field label="Your name">
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={fieldClass}
            placeholder="Jane Smith"
          />
        </Field>
        <Field label="Company">
          <input
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            className={fieldClass}
            placeholder="Company name"
          />
        </Field>
        <div className="md:col-span-2">
          <Field label="What is this about?">
            <select
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              className={fieldClass}
            >
              {INTERESTS.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </Field>
        </div>
        <div className="md:col-span-2">
          <Field label="Your message">
            <textarea
              required
              value={note}
              onChange={(event) => setNote(event.target.value)}
              rows={5}
              className={fieldClass}
              placeholder="What are you looking to solve?"
            />
          </Field>
        </div>
        <div className="md:col-span-2 flex flex-wrap items-center gap-3">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-[#128C7E] px-7 py-3.5 text-sm font-medium text-white hover:bg-[#0e6e63] transition-colors"
          >
            Send to WhatsApp
            <span aria-hidden>→</span>
          </button>
          <a
            href={telUrl()}
            className="inline-flex items-center gap-2 rounded-full border border-hairline px-7 py-3.5 text-sm font-medium hover:bg-muted transition-colors"
          >
            Call us instead
          </a>
        </div>
      </div>
      <div className="lg:col-span-5 rounded-3xl bg-ink text-white p-8">
        <div className="section-kicker text-brand-tint">Message preview</div>
        <p className="mt-5 text-sm text-white/80 whitespace-pre-wrap leading-relaxed">{composed}</p>
        <p className="mt-8 text-sm text-white/50">This opens WhatsApp to {CONTACT_PHONE_DISPLAY}.</p>
      </div>
    </form>
  );
}

function Thanks({ title, text }: { title: string; text: string }) {
  return (
    <div className="py-8">
      <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-brand-wash text-brand">
        <CheckCircle2 className="h-7 w-7" />
      </div>
      <h3 className="mt-5 font-sans text-3xl tracking-tight">{title}</h3>
      <p className="mt-3 text-ink-soft max-w-xl leading-relaxed">{text}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-hairline bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <img src={futureLogo.url} alt="Future" width={140} height={36} className="h-8 w-auto" />
            <p className="mt-6 text-ink-soft max-w-md leading-relaxed">
              Future Communications Company — engineering intelligent digital transformation for
              modern enterprises across the UK.
            </p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li><Link to="/microsoft/azure" className="hover:text-ink transition-colors">Microsoft</Link></li>
              <li><Link to="/cybersecurity/barracuda" className="hover:text-ink transition-colors">Cyber Security</Link></li>
              <li><Link to="/customer-experience/xebo" className="hover:text-ink transition-colors">Customer Experience</Link></li>
              <li><Link to="/ai/dune-dynamics" className="hover:text-ink transition-colors">AI & Automation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li><Link to="/about" className="hover:text-ink transition-colors">About</Link></li>
              <li><a href="/#industries" className="hover:text-ink transition-colors">Industries</a></li>
              <li><a href="/#approach" className="hover:text-ink transition-colors">Approach</a></li>
              <li><Link to="/contact" className="hover:text-ink transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-hairline flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <p className="text-xs text-ink-soft">
            © {new Date().getFullYear()} Future Communications Company. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-soft">United Kingdom</p>
        </div>
      </div>
    </footer>
  );
}
