import { motion } from "framer-motion";

export default function BismillahIntro({
  onContinue,
}: {
  onContinue: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98, filter: "blur(6px)" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      onClick={onContinue}
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center cursor-pointer select-none overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, #f7f1e6 0%, #ebe0ce 60%, #e2d3be 100%)",
      }}
    >
      {/* Background paper texture effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Ambient warm lantern glow overlay */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(230,195,120,0.45) 0%, rgba(230,195,120,0) 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Main Image Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex h-full w-full max-w-lg items-center justify-center p-3 sm:p-5"
      >
        <img
          src="/assets/bismillah-intro.jpg"
          alt="Bismillah - In the Name of Allah, the Most Beneficent, the Most Merciful"
          className="max-h-[92dvh] w-auto max-w-full rounded-2xl object-contain shadow-[0_20px_60px_rgba(40,30,20,0.18)]"
        />
      </motion.div>

      {/* Click on screen to continue prompt */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="pointer-events-none absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2.5 rounded-full border border-[#1a1814]/15 bg-[#1a1814]/85 px-6 py-2.5 text-[#f6f0e6] shadow-[0_12px_30px_rgba(30,24,18,0.25)] backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4af37] opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d4af37]"></span>
          </span>
          <p className="font-display text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.26em] text-[#fbf8f3] whitespace-nowrap">
            Click on screen to continue
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
