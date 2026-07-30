"use client";

import { motion } from "motion/react";

type TripPhotoLoaderProps = {
  activeMomentIndex: number;
  loadingProgress: number;
  prefersReducedMotion: boolean | null;
};

const LOADER_SEGMENT_COUNT = 28;

export default function TripPhotoLoader({
  activeMomentIndex,
  loadingProgress,
  prefersReducedMotion,
}: TripPhotoLoaderProps) {
  const filledSegments = Math.round(
    (loadingProgress / 100) * LOADER_SEGMENT_COUNT,
  );

  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      className="flex h-full min-h-[360px] flex-col items-center justify-center"
      exit={{
        filter: "blur(8px)",
        opacity: 0,
        scale: 1.08,
      }}
      initial={{ opacity: 0, scale: 0.94 }}
      key={`loader-${activeMomentIndex}`}
      transition={{ duration: prefersReducedMotion ? 0.1 : 0.34 }}
    >
      <div className="relative h-40 w-40">
        <motion.div
          animate={prefersReducedMotion ? undefined : { rotate: 360 }}
          className="absolute inset-0"
          transition={{
            duration: 4,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {Array.from({ length: LOADER_SEGMENT_COUNT }).map((_, index) => (
            <span
              className={`absolute left-1/2 top-1/2 h-6 w-[3px] rounded-full transition-colors duration-150 ${
                index < filledSegments
                  ? "bg-[#fd6162]"
                  : "bg-slate-200 dark:bg-neutral-700"
              }`}
              key={index}
              style={{
                transform: `translate(-50%, -50%) rotate(${
                  index * (360 / LOADER_SEGMENT_COUNT)
                }deg) translateY(-58px)`,
              }}
            />
          ))}
        </motion.div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-black tabular-nums tracking-tight">
            {loadingProgress}
          </span>
          <span className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 dark:text-neutral-500">
            percent
          </span>
        </div>
      </div>
      <p className="mt-5 text-xs font-semibold tracking-[0.12em] text-slate-400 dark:text-neutral-500">
        여행의 장면을 불러오는 중
      </p>
    </motion.div>
  );
}
