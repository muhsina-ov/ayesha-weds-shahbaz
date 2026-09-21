import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VolumeX } from "lucide-react";
import { wedding } from "../config";

interface AudioPlayerProps {
  autoPlayTrigger?: boolean;
}

export default function AudioPlayer({ autoPlayTrigger = false }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const hasTriggered = useRef(false);

  // Auto-play as soon as user opens the invitation gate
  useEffect(() => {
    if (autoPlayTrigger && !hasTriggered.current) {
      hasTriggered.current = true;
      const audio = audioRef.current;
      if (audio) {
        audio.volume = 0.75;
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay policy fallback: remains paused until direct user tap
            setIsPlaying(false);
          });
      }
    }
  }, [autoPlayTrigger]);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  if (!wedding.music?.enabled) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src={wedding.music.src}
        loop
        preload="auto"
        playsInline
      />

      <motion.aside
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="fixed bottom-6 right-6 z-40 flex items-center"
        aria-label="Background audio control"
      >
        <motion.button
          type="button"
          onClick={toggleAudio}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#1a1814]/85 text-[#f6f0e6] shadow-[0_12px_32px_rgba(26,24,20,0.35)] backdrop-blur-md transition-colors hover:border-[#d4af37]/80 hover:bg-[#1a1814]"
          aria-label={isPlaying ? "Mute background music" : "Play background music"}
        >
          {/* Subtle spinning outer ring when playing */}
          {isPlaying && (
            <motion.span
              className="pointer-events-none absolute -inset-1 rounded-full border border-dashed border-[#d4af37]/45"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          )}

          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="playing"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="flex items-center justify-center gap-[3px]"
              >
                {/* 3 animated equalizer bars */}
                <motion.span
                  className="h-3.5 w-[2.5px] rounded-full bg-[#d4af37]"
                  animate={{ height: [5, 14, 7, 13, 6] }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.span
                  className="h-3.5 w-[2.5px] rounded-full bg-[#f6f0e6]"
                  animate={{ height: [12, 6, 15, 8, 12] }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
                />
                <motion.span
                  className="h-3.5 w-[2.5px] rounded-full bg-[#d4af37]"
                  animate={{ height: [7, 13, 6, 14, 5] }}
                  transition={{ duration: 1.0, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                />
              </motion.div>
            ) : (
              <motion.div
                key="muted"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
              >
                <VolumeX size={18} className="text-[#c2b39f]" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.aside>
    </>
  );
}
