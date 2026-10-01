export const CONTACT_EMAIL = "inquiry@fcc-solutions.co.uk";
export const BOOKING_EMAIL = CONTACT_EMAIL;
export const CONTACT_PHONE_DISPLAY = "+44 7349 938088";
export const CONTACT_PHONE_E164 = "447349938088";
export const WHATSAPP_E164 = CONTACT_PHONE_E164;
export const WHATSAPP_DISPLAY = CONTACT_PHONE_DISPLAY;

export function whatsappUrl(text: string) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_E164}&text=${encodeURIComponent(text)}`;
}

export function telUrl() {
  return `tel:+${CONTACT_PHONE_E164}`;
}

export function mailTo(subject: string, body: string, to = CONTACT_EMAIL) {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export type BookingSlot = {
  name: string;
  email: string;
  date: string;
  time: string;
  topic: string;
};

function endClock(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  const end = new Date(Date.UTC(2020, 0, 1, hours, minutes));
  end.setUTCHours(end.getUTCHours() + 1);
  return `${String(end.getUTCHours()).padStart(2, "0")}:${String(end.getUTCMinutes()).padStart(2, "0")}`;
}

function stamp(date: string, time: string) {
  return `${date.replaceAll("-", "")}T${time.replace(":", "")}00`;
}

function icsEscape(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\r?\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

export function bookingTitle(name: string) {
  return `FCC discovery call with ${name}`;
}

export function bookingCalendarLinks(input: BookingSlot) {
  const end = endClock(input.time);
  const title = bookingTitle(input.name);
  const details = `${input.topic}\nBooked by ${input.name} (${input.email})`;
  const google = new URL("https://calendar.google.com/calendar/render");
  google.searchParams.set("action", "TEMPLATE");
  google.searchParams.set("text", title);
  google.searchParams.set("dates", `${stamp(input.date, input.time)}/${stamp(input.date, end)}`);
  google.searchParams.set("ctz", "Europe/London");
  google.searchParams.set("details", details);
  google.searchParams.set("add", BOOKING_EMAIL);

  const outlook = new URL("https://outlook.office.com/calendar/0/deeplink/compose");
  outlook.searchParams.set("subject", title);
  outlook.searchParams.set("body", details);
  outlook.searchParams.set("startdt", `${input.date}T${input.time}:00`);
  outlook.searchParams.set("enddt", `${input.date}T${end}:00`);
  outlook.searchParams.set("to", `${BOOKING_EMAIL},${input.email}`);
  outlook.searchParams.set("path", "/calendar/action/compose");
  outlook.searchParams.set("rru", "addevent");

  return { google: google.toString(), outlook: outlook.toString() };
}

export function bookingIcs(input: BookingSlot) {
  const end = endClock(input.time);
  const title = bookingTitle(input.name);
  const uid = `${input.date}-${input.time}-${input.email.replace(/[^a-z0-9]/gi, "")}@fcc-solutions.co.uk`;
  const now = new Date();
  const dtstamp = now.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//FCC//Contact Booking//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}`,
    `DTSTART;TZID=Europe/London:${stamp(input.date, input.time)}`,
    `DTEND;TZID=Europe/London:${stamp(input.date, end)}`,
    `SUMMARY:${icsEscape(title)}`,
    `DESCRIPTION:${icsEscape(`${input.topic}\nBooked by ${input.name} (${input.email})`)}`,
    `ORGANIZER;CN=${icsEscape(input.name)}:mailto:${input.email}`,
    `ATTENDEE;CN=FCC;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE:mailto:${BOOKING_EMAIL}`,
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export function downloadIcs(filename: string, ics: string) {
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
