"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import type { JourneyMoment } from "@/constant/tripPhotoJourney";

type TripPhotoCarouselProps = {
  activeMomentIndex: number;
  activePhotoIndex: number;
  moment: JourneyMoment;
  onNext: () => void;
  onPhotoSelect: (index: number) => void;
  onPrevious: () => void;
  prefersReducedMotion: boolean | null;
};

export default function TripPhotoCarousel({
  activeMomentIndex,
  activePhotoIndex,
  moment,
  onNext,
  onPhotoSelect,
  onPrevious,
  prefersReducedMotion,
}: TripPhotoCarouselProps) {
  const activePhoto = moment.photos[activePhotoIndex];
  const photoCountLabel = `${String(activePhotoIndex + 1).padStart(
    2,
    "0",
  )} / ${String(moment.photos.length).padStart(2, "0")}`;

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="grid h-full min-h-0 grid-rows-[minmax(0,1fr)_auto] gap-4"
      initial={{ opacity: 0, y: 14 }}
      key={`carousel-${activeMomentIndex}`}
      transition={{ duration: prefersReducedMotion ? 0.1 : 0.42 }}
    >
      <div className="group relative min-h-[340px] overflow-hidden rounded-[26px] bg-slate-950">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0"
            exit={{ opacity: 0, scale: 1.025 }}
            initial={{ opacity: 0, scale: 1.035 }}
            key={`${moment.date}-${activePhoto.src}`}
            transition={{ duration: prefersReducedMotion ? 0.1 : 0.38 }}
          >
            <Image
              alt={activePhoto.caption}
              className="object-cover"
              draggable={false}
              fill
              sizes="(max-width: 1200px) 90vw, 1100px"
              src={activePhoto.src}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/15" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute left-5 top-5 flex items-center gap-2">
          <span className="rounded-full bg-black/45 px-3 py-1.5 text-[10px] font-black tracking-[0.18em] text-white backdrop-blur-md">
            {activePhoto.time}
          </span>
          <span className="rounded-full bg-white/16 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-md">
            {photoCountLabel}
          </span>
        </div>

        <button
          aria-label="이전 사진"
          className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white opacity-70 backdrop-blur transition-all hover:scale-105 hover:bg-black/55 hover:opacity-100 focus-visible:opacity-100"
          onClick={onPrevious}
          type="button"
        >
          <MdChevronLeft size={27} />
        </button>
        <button
          aria-label="다음 사진"
          className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white opacity-70 backdrop-blur transition-all hover:scale-105 hover:bg-black/55 hover:opacity-100 focus-visible:opacity-100"
          onClick={onNext}
          type="button"
        >
          <MdChevronRight size={27} />
        </button>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 sm:p-7">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/55">
              {moment.date}
            </p>
            <p className="mt-1 text-lg font-bold text-white sm:text-xl">
              {activePhoto.caption}
            </p>
          </div>
          <p className="hidden shrink-0 text-xs font-semibold text-white/55 sm:block">
            ← → 키로 넘겨보기
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 overflow-x-auto px-1 pb-1">
        {moment.photos.map((photo, index) => {
          const isActive = index === activePhotoIndex;

          return (
            <button
              aria-label={`${photo.time} 사진 보기`}
              aria-pressed={isActive}
              className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                isActive
                  ? "border-[#fd6162] opacity-100 shadow-[0_8px_18px_rgba(253,97,98,0.18)]"
                  : "border-transparent opacity-45 hover:opacity-80"
              }`}
              key={`${photo.src}-${photo.time}`}
              onClick={() => onPhotoSelect(index)}
              type="button"
            >
              <Image
                alt=""
                className="object-cover"
                fill
                sizes="80px"
                src={photo.src}
              />
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
