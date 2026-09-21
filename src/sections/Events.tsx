import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { useLocalTilt } from "../hooks/useParallax";
import { wedding } from "../config";

function EventIcon({ type }: { type: string }) {
  if (type === "haldi") {
    // Floral / Haldi motif
    return (
      <svg
        className="h-7 w-7 text-[#b38f4d]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 0 0-9Z" />
        <path d="M12 13a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 0 0-9Z" />
        <path d="M2 12a4.5 4.5 0 0 0 9 0 4.5 4.5 0 0 0-9 0Z" />
        <path d="M13 12a4.5 4.5 0 0 0 9 0 4.5 4.5 0 0 0-9 0Z" />
      </svg>
    );
  }
  if (type === "mehandi") {
    // Henna flourish motif
    return (
      <svg
        className="h-7 w-7 text-[#b38f4d]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    );
  }
  // Mosque dome / minaret silhouette for Nikah
  return (
    <svg
      className="h-7 w-7 text-[#b38f4d]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2c-.6 1.8-1.5 3-3 4.5C6.5 8.5 5 10.5 5 13v7h14v-7c0-2.5-1.5-4.5-4-6.5-1.5-1.5-2.4-2.7-3-4.5Z" />
      <path d="M10 20v-4a2 2 0 0 1 4 0v4" />
      <path d="M12 2v-1" />
    </svg>
  );
}

export default function Events() {
  const { ref, style } = useLocalTilt(4);

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6">

      <Reveal className="mb-12 flex flex-col items-center gap-3 text-center">
        <span className="text-[11px] uppercase tracking-[0.4em] text-[#8a7a68]">
          Ceremonies & Celebrations
        </span>
        <h2 className="font-script text-5xl text-[#1a1814] sm:text-6xl">
          The Wedding Festivities
        </h2>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#1a1814]/25 to-transparent" />
      </Reveal>

      {/* Main 3-Event Schedule Box */}
      <Reveal className="relative mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          style={style}
          className="relative overflow-hidden rounded-[2.5rem] border border-[#d4af37]/35 bg-[#fffaf4]/85 px-6 py-12 shadow-[0_30px_80px_rgba(60,45,30,0.08)] ring-1 ring-[rgba(26,24,20,0.06)] backdrop-blur-sm sm:px-10 sm:py-14"
        >
          <div className="pointer-events-none absolute inset-3 rounded-[2.1rem] border border-[#1a1814]/10 sm:inset-4" />

          {/* 3 Events Columns */}
          <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
            {wedding.events.map((event, idx) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                className={`relative flex flex-col items-center px-4 text-center ${
                  idx < wedding.events.length - 1
                    ? "md:border-r md:border-[#1a1814]/15"
                    : ""
                }`}
              >
                {/* Motif icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b38f4d]/10">
                  <EventIcon type={event.id} />
                </div>

                {/* Event Name */}
                <p className="mt-4 text-[12px] font-medium uppercase tracking-[0.35em] text-[#2c261f]">
                  {event.name}
                </p>

                {/* Day Number */}
                <p className="mt-2 font-display text-6xl font-normal leading-none text-[#1a1814] sm:text-7xl">
                  {event.dayNum}
                </p>

                {/* Month & Year */}
                <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-[#7a6d60]">
                  {event.monthLabel}
                </p>

                {/* Divider */}
                <div className="my-3 h-px w-10 bg-[#1a1814]/15" />

                {/* Time */}
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3d342c]">
                  {event.time}
                </p>

                {/* Note / description */}
                <p className="mt-3 max-w-[220px] font-display text-xs italic leading-relaxed text-[#6e6256]">
                  {event.note}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Grace Note matching the card footer */}
          <div className="relative z-10 mt-12 flex flex-col items-center pt-8 text-center">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#1a1814]/25" />
              <span className="text-xs text-[#8a7a68]">✦</span>
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#1a1814]/25" />
            </div>
            <p className="text-[11px] uppercase tracking-[0.38em] text-[#6e6256] sm:text-xs">
              {wedding.graceNote}
            </p>
          </div>
        </motion.div>

        {/* Day of Nikah Program timeline */}
        <div className="relative mx-auto mt-16 max-w-sm">
          <p className="mb-8 text-center text-[11px] uppercase tracking-[0.4em] text-[#8a7a68]">
            Nikah Day Itinerary · 12 December
          </p>
          <div className="relative">
            <motion.div
              className="absolute bottom-2 left-[5px] top-2 w-px origin-top bg-gradient-to-b from-[#1a1814]/30 via-[#1a1814]/15 to-transparent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="flex flex-col gap-6">
              {wedding.program.map((step, i) => (
                <motion.div
                  key={step.name}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    delay: 0.15 + i * 0.09,
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ x: 4 }}
                  className="flex cursor-default items-start gap-4 pl-1"
                >
                  <motion.span
                    className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#1a1814]/70 ring-4 ring-[#f3ede3]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2 + i * 0.09,
                      type: "spring",
                      stiffness: 320,
                      damping: 18,
                    }}
                  />
                  <div className="flex flex-1 items-baseline justify-between gap-3">
                    <p className="font-display text-lg text-[#2c261f]">
                      {step.name}
                    </p>
                    <p className="shrink-0 text-[11px] uppercase tracking-[0.18em] text-[#7a6d60]">
                      {step.time}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

