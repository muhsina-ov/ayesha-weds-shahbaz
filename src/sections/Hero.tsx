import { useMemo, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { layerTransform, useParallax } from "../hooks/useParallax";
import { CursorGlow } from "../components/FloatingPetals";
import { wedding } from "../config";

const SPARKS = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: 6 + ((i * 37) % 88),
  top: 10 + ((i * 53) % 76),
  size: 1.5 + (i % 5) * 0.7,
  delay: (i % 9) * 0.28,
  duration: 2.6 + (i % 6) * 0.4,
}));

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const point = useParallax(true);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const artY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 100]), {
    stiffness: 90,
    damping: 26,
  });
  const artScale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 0.94]), {
    stiffness: 90,
    damping: 26,
  });
  const artOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);
  const textY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -50]), {
    stiffness: 90,
    damping: 26,
  });
  const textOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const vignette = useTransform(scrollYProgress, [0, 1], [0.3, 0.8]);
  const vignetteBg = useMotionTemplate`linear-gradient(to bottom, rgba(243,237,227,${vignette}), transparent 40%, rgba(243,237,227,0.95))`;

  const layers = useMemo(
    () => ({
      bg: layerTransform(point, 0.1, { scale: 1.1, scrollY: 0.35 }),
      glow: layerTransform(point, 0.22, { scrollY: 0.2 }),
      sparks: layerTransform(point, 1.35, { scrollY: 1.1 }),
      title: layerTransform(point, 0.18, { invert: true, scrollY: -0.2 }),
    }),
    [point]
  );

  const sparkBoost = 0.55 + point.velocity * 0.9;

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100dvh] flex-col justify-between overflow-hidden"
    >
      {/* Full-bleed cream wash */}
      <div className="pointer-events-none absolute inset-0 bg-[#f3ede3]" />
      <div
        className="pointer-events-none absolute inset-[-10%] will-change-transform"
        style={layers.bg}
      >
        <img
          src="/assets/layers/layer-01-background.png"
          alt=""
          className="h-full w-full object-cover opacity-90"
          draggable={false}
        />
      </div>

      <CursorGlow x={point.x} y={point.y} />

      {/* Ambient background glow & sparkles */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[1] mx-auto flex items-center justify-center"
        style={{ y: artY, scale: artScale, opacity: artOpacity }}
      >
        {/* Soft halo */}
        <div className="absolute inset-0 will-change-transform" style={layers.glow}>
          <div
            className="absolute left-1/2 top-1/2 h-[75%] w-[85%] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,250,242,0.3) 45%, transparent 70%)",
              animation: "halo-breathe 5.5s ease-in-out infinite",
            }}
          />
        </div>

        {/* Sequin sparkles — brighten with pointer velocity */}
        <div
          className="absolute inset-0 z-[4] will-change-transform"
          style={layers.sparks}
          aria-hidden
        >
          {SPARKS.map((s) => (
            <span
              key={s.id}
              className="absolute rounded-full bg-white"
              style={{
                left: `${s.left}%`,
                top: `${s.top}%`,
                width: s.size,
                height: s.size,
                opacity: sparkBoost,
                boxShadow: `0 0 ${6 + point.velocity * 10}px rgba(255,255,255,${0.7 + point.velocity * 0.3})`,
                animation: `sparkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Soft vignette that deepens on scroll */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[5]"
        style={{ background: vignetteBg }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-36 bg-gradient-to-b from-[#f3ede3] to-transparent" />

      {/* Main Centered Wedding Invitation Presentation */}
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center px-6 py-16 text-center"
        style={{ y: textY, opacity: textOpacity }}
      >
        <div className="flex w-full flex-col items-center will-change-transform" style={layers.title}>
          {/* Elegant Arch & Monogram Crest */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-[#d4af37]/35 bg-[#fffaf4]/60 shadow-[0_8px_24px_rgba(60,45,30,0.06)] backdrop-blur-xs"
          >
            <span className="font-script text-3xl text-[#1a1814] sm:text-4xl">
              {wedding.monogram}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12, letterSpacing: "0.55em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.42em" }}
            transition={{ delay: 0.2, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[11px] uppercase text-[#6e6256] sm:text-xs"
          >
            Together with their families
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-script leading-[0.98] text-[#1a1814]"
            style={{ fontSize: "clamp(3.5rem, 13vw, 5.8rem)" }}
          >
            <motion.span
              className="inline-block"
              whileHover={{ y: -3, transition: { duration: 0.35 } }}
            >
              {wedding.bride}
            </motion.span>
            <span className="mx-3 inline-block font-script text-[0.55em] text-[#8a7a68]">
              &
            </span>
            <motion.span
              className="inline-block"
              whileHover={{ y: -3, transition: { duration: 0.35 } }}
            >
              {wedding.groom}
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="my-6 flex items-center gap-3"
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#1a1814]/30" />
            <span className="text-xs text-[#8a7a68]">✦</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#1a1814]/30" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="font-display text-xl tracking-wide text-[#3d342c] sm:text-2xl"
          >
            {wedding.dateLabel}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.8 }}
            className="mt-2 text-[11px] uppercase tracking-[0.35em] text-[#7a6d60] sm:text-xs"
          >
            {wedding.timeLabel}
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() =>
          window.scrollTo({ top: window.innerHeight * 0.9, behavior: "smooth" })
        }
        className="relative z-10 mb-8 flex flex-col items-center gap-2 self-center text-[#7a6d60] transition-colors hover:text-[#1a1814]"
        aria-label="Scroll to invitation details"
      >
        <span className="text-[10px] uppercase tracking-[0.38em]">Scroll</span>
        <span
          className="block h-8 w-px bg-gradient-to-b from-[#1a1814]/45 to-transparent"
          style={{ animation: "scroll-pulse 2.2s ease-in-out infinite" }}
        />
      </motion.button>
    </section>
  );
}

