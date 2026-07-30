"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { MdClose, MdLocationPin } from "react-icons/md";

import TripJourneyTimeline from "@/components/trip/TripJourneyTimeline";
import TripPhotoCarousel from "@/components/trip/TripPhotoCarousel";
import TripPhotoLoader from "@/components/trip/TripPhotoLoader";
import { TRIP_JOURNEY_MOMENTS } from "@/constant/tripPhotoJourney";

type TripPhotoJourneyModalProps = {
  airport: {
    city: string;
    code: string;
    country: string;
  };
  initialPhotoIndex: number;
  onClose: () => void;
};

export default function TripPhotoJourneyModal({
  airport,
  initialPhotoIndex,
  onClose,
}: TripPhotoJourneyModalProps) {
  // 시각적 에니메이션 최소화 (운영체제 접근성)
  const prefersReducedMotion = useReducedMotion();
  const loadingTimeoutRef = useRef<number | null>(null);
  const [activeMomentIndex, setActiveMomentIndex] = useState(0);
  const [activePhotoIndex, setActivePhotoIndex] = useState(
    initialPhotoIndex % TRIP_JOURNEY_MOMENTS[0].photos.length,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const activeMoment = TRIP_JOURNEY_MOMENTS[activeMomentIndex];

  useEffect(() => {
    // 모달 뒤 페이지 스크롤 위치 저장
    const originalOverflow = document.body.style.overflow;
    // 모달 뒤 페이지 스크롤 방지 (넘치는 영역 숨김)
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (isLoading) return;

      if (event.key === "ArrowLeft") {
        setActivePhotoIndex((current) =>
          current === 0 ? activeMoment.photos.length - 1 : current - 1,
        );
      }

      if (event.key === "ArrowRight") {
        setActivePhotoIndex((current) =>
          current === activeMoment.photos.length - 1 ? 0 : current + 1,
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      // 모달이 닫히면 기존 스크롤 복구
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeMoment.photos.length, isLoading, onClose]);

  useEffect(() => {
    let progress = 0;

    setIsLoading(true);
    setLoadingProgress(0);
    setActivePhotoIndex((current) =>
      Math.min(
        current,
        TRIP_JOURNEY_MOMENTS[activeMomentIndex].photos.length - 1,
      ),
    );

    const interval = window.setInterval(
      () => {
        progress = Math.min(
          100,
          progress + (progress < 72 ? 4 : progress < 92 ? 2 : 1),
        );
        setLoadingProgress(progress);

        if (progress === 100) {
          window.clearInterval(interval);
          loadingTimeoutRef.current = window.setTimeout(
            () => setIsLoading(false),
            prefersReducedMotion ? 80 : 420,
          );
        }
      },
      prefersReducedMotion ? 8 : 28,
    );

    return () => {
      window.clearInterval(interval);

      if (loadingTimeoutRef.current !== null) {
        window.clearTimeout(loadingTimeoutRef.current);
      }
    };
  }, [activeMomentIndex, prefersReducedMotion]);

  function selectMoment(nextIndex: number) {
    setActivePhotoIndex(0);
    setActiveMomentIndex(nextIndex);
  }

  function showPreviousPhoto() {
    setActivePhotoIndex((current) =>
      current === 0 ? activeMoment.photos.length - 1 : current - 1,
    );
  }

  function showNextPhoto() {
    setActivePhotoIndex((current) =>
      current === activeMoment.photos.length - 1 ? 0 : current + 1,
    );
  }

  // createPortal(Render, DOM): Render할 React 컴포넌트를 입력한 DOM요소에 렌더링
  return createPortal(
    <motion.div
      animate={{ opacity: 1 }}
      aria-label={`${airport.city} 여행 사진`}
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#120d0d]/75 p-4 backdrop-blur-xl sm:p-7"
      initial={{ opacity: 0 }}
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) onClose();
      }}
      role="dialog"
    >
      <motion.div
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative flex h-[min(880px,92svh)] w-full max-w-[1180px] flex-col overflow-hidden rounded-[34px] border border-white/70 bg-[#fffaf7] text-slate-900 shadow-[0_40px_140px_rgba(0,0,0,0.42)] dark:border-white/10 dark:bg-[#111111] dark:text-white"
        initial={{ opacity: 0, scale: 0.97, y: 18 }}
        transition={{ duration: prefersReducedMotion ? 0.1 : 0.36 }}
      >
        <header className="flex shrink-0 items-start justify-between gap-6 px-6 pb-5 pt-6 sm:px-8 sm:pt-7">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#fd6162] px-3 py-1 text-[10px] font-black tracking-[0.2em] text-white">
                {airport.code}
              </span>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 dark:text-neutral-500">
                Photo journey
              </p>
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
              {airport.city}, {airport.country}
            </h2>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-400 dark:text-neutral-500">
              <MdLocationPin className="text-[#fd6162]" size={16} />
              {activeMoment.date} · {activeMoment.title}
            </p>
          </div>

          <button
            aria-label="사진 모달 닫기"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:rotate-90 hover:border-[#fd6162]/30 hover:text-[#fd6162] dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
            onClick={onClose}
            type="button"
          >
            <MdClose size={20} />
          </button>
        </header>

        <TripJourneyTimeline
          activeMomentIndex={activeMomentIndex}
          onMomentSelect={selectMoment}
          prefersReducedMotion={prefersReducedMotion}
        />

        <div className="min-h-0 flex-1 border-t border-dashed border-slate-200 bg-white/55 p-4 dark:border-neutral-800 dark:bg-black/15 sm:p-6">
          {/* 전환 에니메이션 */}
          <AnimatePresence mode="wait">
            {isLoading ? (
              <TripPhotoLoader
                activeMomentIndex={activeMomentIndex}
                key={`loader-${activeMomentIndex}`}
                loadingProgress={loadingProgress}
                prefersReducedMotion={prefersReducedMotion}
              />
            ) : (
              <TripPhotoCarousel
                activeMomentIndex={activeMomentIndex}
                activePhotoIndex={activePhotoIndex}
                key={`carousel-${activeMomentIndex}`}
                moment={activeMoment}
                onNext={showNextPhoto}
                onPhotoSelect={setActivePhotoIndex}
                onPrevious={showPreviousPhoto}
                prefersReducedMotion={prefersReducedMotion}
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  );
}
