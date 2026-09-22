import { motion } from "framer-motion";
import Reveal, { ParallaxBlock } from "../components/Reveal";
import { wedding } from "../config";

export default function InviteMessage() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1a1814]/12 to-transparent" />

      {/* Soft floating bouquet watermark */}
      <ParallaxBlock
        speed={0.2}
        className="pointer-events-none absolute -right-8 top-8 opacity-[0.06] sm:right-6"
      >
        <img
          src="/assets/layers/layer-05-bouquet.png"
          alt=""
          className="w-40 rotate-12 sm:w-56"
        />
      </ParallaxBlock>

      <ParallaxBlock
        speed={0.16}
        className="pointer-events-none absolute -left-8 bottom-12 opacity-[0.05] sm:left-4"
      >
        <img
          src="/assets/layers/layer-05-bouquet.png"
          alt=""
          className="w-36 -scale-x-100 -rotate-12 sm:w-48"
        />
      </ParallaxBlock>

      <Reveal className="mx-auto max-w-xl">
        {/* Ornate invitation card enclosure inspired by the arch design */}
        <div className="relative rounded-[2.5rem] border border-[#d4af37]/30 bg-[#fbf8f2]/90 p-8 shadow-[0_24px_60px_rgba(60,45,30,0.07)] backdrop-blur-sm sm:p-12">
          {/* Inner arch border outline */}
          <div className="pointer-events-none absolute inset-3 rounded-[2.1rem] border border-[#1a1814]/10 sm:inset-4" />

          {/* Top Bismillah & Quranic Verse */}
          <div className="flex flex-col items-center text-center">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-arabic text-2xl tracking-wide text-[#2e2b26] sm:text-3xl"
            >
              {wedding.verse.arabic}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mt-3 font-display text-base italic text-[#5c5146] sm:text-lg"
            >
              {wedding.verse.quote}
            </motion.p>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-[10px] uppercase tracking-[0.25em] text-[#8a7a68]"
            >
              {wedding.verse.source}
            </motion.span>

            {/* Ornamental divider */}
            <div className="my-7 flex items-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#1a1814]/25" />
              <span className="text-xs text-[#8a7a68]">✦</span>
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#1a1814]/25" />
            </div>

            {/* Blessings & Request */}
            <p className="font-display text-[11px] uppercase tracking-[0.32em] text-[#8a7a68] sm:text-xs">
              {wedding.blessing}
            </p>
            <p className="mt-2.5 font-display text-base text-[#4a4036] sm:text-lg">
              We joyfully request your presence at the
            </p>

            {/* Main Ceremony Title */}
            <h2 className="mt-1 font-script text-5xl text-[#1a1814] sm:text-6xl">
              Nikah
            </h2>
            <p className="mt-2 font-display text-[11px] uppercase tracking-[0.32em] text-[#8a7a68] sm:text-xs">
              OF OUR BELOVED DAUGHTER & GRANDDAUGHTER
            </p>

            {/* Bride Details */}
            <div className="mt-8 flex flex-col items-center">
              <h3 className="font-script text-4xl text-[#1a1814] sm:text-5xl">
                {wedding.brideFull}
              </h3>
              <p className="mt-3 font-display text-base tracking-wide text-[#5c5146] sm:text-lg">
                {wedding.brideParents}
              </p>
              <p className="mt-1.5 font-display text-sm italic tracking-wide text-[#7a6d60] sm:text-base">
                {wedding.brideGrandparents}
              </p>
            </div>

            {/* Connector */}
            <div className="my-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#1a1814]/20" />
              <span className="font-display text-[11px] uppercase tracking-[0.35em] text-[#8a7a68]">
                WITH
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#1a1814]/20" />
            </div>

            {/* Groom Details */}
            <div className="flex flex-col items-center">
              <h3 className="font-script text-4xl text-[#1a1814] sm:text-5xl">
                {wedding.groomFull}
              </h3>
              <p className="mt-3 font-display text-base tracking-wide text-[#5c5146] sm:text-lg">
                {wedding.groomParents}
              </p>
            </div>

            {/* Warm Note */}
            <div className="mt-9 rounded-full bg-[#1a1814]/[0.03] px-6 py-3 ring-1 ring-[#1a1814]/10">
              <p className="font-display text-sm italic text-[#5c5146] sm:text-base">
                "{wedding.warmNote}"
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

