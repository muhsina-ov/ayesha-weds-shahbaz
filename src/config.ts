// ─────────────────────────────────────────────────────────────
//  WEDDING CONFIG — edit this one file per customer
// ─────────────────────────────────────────────────────────────

export const wedding = {
  bride: "Ayeshaa",
  groom: "Shahbaz",
  brideFull: "Ayeshaa Khatoon",
  groomFull: "Shahbaz Alam",
  brideParents: "D/o Mohammad Khalid Khan & Salma Begum",
  brideGrandparents: "Granddaughter of Sardar Khan & Khairunisa Begum",
  groomParents: "S/o Mohammad Seraj & Farzana Gani",
  hashtag: "#AyeshaaWedsShahbaz",
  monogram: "A · S",
  families: "The Khan & Alam Families",

  // Wedding (countdown + calendar) — Main ceremony: Nikah
  dateISO: "2026-12-12T19:00:00+05:30",
  dateLabel: "Saturday, 12th December 2026",
  timeLabel: "Nikah · After 7:00 PM",

  venue: {
    name: "The Ivory Courtyard",
    address: "12 Jasmine Lane, Bandra West, Mumbai 400050",
    mapsQuery: "Bandra West Mumbai",
  },

  blessing: "WITH THE BLESSINGS OF OUR BELOVED PARENTS & FAMILIES",
  request: "We joyfully request your presence at the Nikah of our beloved daughter & granddaughter",
  warmNote: "Your presence will make our celebration even more special.",
  graceNote: "Kindly grace us with your presence",

  verse: {
    arabic: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    quote: "“And We created you in pairs”",
    source: "(Qur'an 78:8)",
    text: "“And We created you in pairs” (Qur'an 78:8) — With the blessings of our beloved parents and families, we joyfully request your presence at the Nikah of our beloved daughter & granddaughter.",
  },

  events: [
    {
      id: "haldi",
      name: "Haldi",
      icon: "flower",
      date: "Thursday, 10th December 2026",
      dayLabel: "Thursday",
      dayNum: "10",
      monthLabel: "December 2026",
      time: "7:00 PM",
      venue: "The Ivory Courtyard",
      note: "An auspicious evening filled with golden turmeric, joy, and blessed beginnings.",
    },
    {
      id: "mehandi",
      name: "Mehandi",
      icon: "sparkles",
      date: "Friday, 11th December 2026",
      dayLabel: "Friday",
      dayNum: "11",
      monthLabel: "December 2026",
      time: "7:00 PM",
      venue: "The Ivory Courtyard",
      note: "Intricate henna designs, sweet melodies, and celebratory laughter.",
    },
    {
      id: "nikah",
      name: "Nikah",
      icon: "crescent",
      date: "Saturday, 12th December 2026",
      dayLabel: "Saturday",
      dayNum: "12",
      monthLabel: "December 2026",
      time: "After 7:00 PM",
      venue: "The Ivory Courtyard",
      note: "The sacred bond of marriage, solemn vows, and heartfelt prayers.",
    },
  ],

  program: [
    { name: "Guest Arrival", time: "7:00 PM" },
    { name: "Nikah Ceremony", time: "7:45 PM" },
    { name: "Dua & Blessings", time: "8:30 PM" },
    { name: "Royal Dinner Celebration", time: "9:00 PM" },
  ],

  sections: {
    events: true,
    venue: true,
    countdown: true,
  },
};

export const googleCalendarUrl = () => {
  const start = new Date(wedding.dateISO);
  const end = new Date(start.getTime() + 5 * 60 * 60 * 1000);
  const fmt = (d: Date) =>
    d.toISOString().replace(/[-:]|\.\d{3}/g, "").slice(0, 15) + "Z";
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${wedding.bride} weds ${wedding.groom}`,
    dates: `${fmt(start)}/${fmt(end)}`,
    details: `${wedding.venue.name} — ${wedding.venue.address}. ${wedding.hashtag}`,
    location: `${wedding.venue.name}, ${wedding.venue.address}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

export const downloadICS = () => {
  const start = new Date(wedding.dateISO);
  const end = new Date(start.getTime() + 5 * 60 * 60 * 1000);
  const fmt = (d: Date) =>
    d.toISOString().replace(/[-:.]/g, "").slice(0, 15) + "Z";
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//InviteStory//Wedding//EN",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@invitestory`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:${wedding.bride} weds ${wedding.groom}`,
    `DESCRIPTION:${wedding.venue.name} — ${wedding.venue.address}`,
    `LOCATION:${wedding.venue.name}\\, ${wedding.venue.address}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${wedding.bride}-${wedding.groom}-wedding.ics`;
  a.click();
  URL.revokeObjectURL(url);
};

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  wedding.venue.mapsQuery
)}&output=embed`;

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  wedding.venue.mapsQuery
)}`;
