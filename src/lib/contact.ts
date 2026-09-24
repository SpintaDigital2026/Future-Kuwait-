export const CONTACT_EMAIL = "inquiry@fcc-solutions.co.uk";
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

export function mailTo(subject: string, body: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function bookingIcs(input: {
  name: string;
  email: string;
  date: string;
  time: string;
  topic: string;
}) {
  const start = `${input.date.replaceAll("-", "")}T${input.time.replace(":", "")}00`;
  const [hours, minutes] = input.time.split(":").map(Number);
  const endHour = String(hours + 1).padStart(2, "0");
  const end = `${input.date.replaceAll("-", "")}T${endHour}${String(minutes).padStart(2, "0")}00`;
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//FCC//Contact Booking//EN",
    "BEGIN:VEVENT",
    `DTSTART;TZID=Europe/London:${start}`,
    `DTEND;TZID=Europe/London:${end}`,
    `SUMMARY:FCC discovery call with ${input.name}`,
    `DESCRIPTION:${input.topic.replace(/\r?\n/g, "\\n")}`,
    `ORGANIZER;CN=FCC:mailto:${CONTACT_EMAIL}`,
    `ATTENDEE;CN=${input.name}:mailto:${input.email}`,
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
