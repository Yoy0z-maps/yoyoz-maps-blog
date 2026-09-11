"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useReducedMotion } from "motion/react";
import {
  MdClose,
  MdExpandMore,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";
import TripJourneyTimeline from "./TripJourneyTimeline";
import TripPhotoCarousel from "./TripPhotoCarousel";
import { groupPhotoMonths, type TripPhoto } from "@/lib/trip/photos";

type Props = {
  airport: { city: string; code: string; country: string };
  photos: TripPhoto[];
  initialPhotoPath: string;
  onClose: () => void;
};
export default function TripPhotoJourneyModal({
  airport,
  photos,
  initialPhotoPath,
  onClose,
}: Props) {
  const months = useMemo(() => groupPhotoMonths(photos), [photos]);
  const initial =
    photos.find((photo) => photo.path === initialPhotoPath) || photos[0];
  const [year, setYear] = useState(initial?.date.slice(0, 4) || "");
  const [month, setMonth] = useState(initial?.date.slice(0, 7) || "");
  const [photoPath, setPhotoPath] = useState(initialPhotoPath);
  const years = Array.from(
    new Set(months.map((moment) => moment.date.slice(0, 4))),
  ).reverse();
  const yearMonths = months.filter((moment) => moment.date.startsWith(year));
  const selectedIndex = Math.max(
    0,
    yearMonths.findIndex((moment) => moment.date === month),
  );
  const page = Math.floor(selectedIndex / 8);
  const visibleMonths = yearMonths.slice(page * 8, page * 8 + 8);
  const activeMoment = yearMonths[selectedIndex];
  const photoIndex = Math.max(
    0,
    activeMoment?.photos.findIndex((photo) => photo.path === photoPath) ?? 0,
  );
  const reduced = useReducedMotion();
  const dialog = useRef<HTMLDivElement>(null);
  function selectMonth(date: string) {
    setMonth(date);
    setPhotoPath("");
  }
  function selectPhoto(index: number) {
    setPhotoPath(activeMoment.photos[index]?.path || "");
  }
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);
  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-6 backdrop-blur-xl"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialog}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={`${airport.city} 여행 사진`}
        className="flex h-[92svh] w-full max-w-[860px] flex-col overflow-hidden rounded-[32px] bg-[#fffaf7] text-slate-900 outline-none dark:bg-neutral-950 dark:text-white"
        onKeyDown={(event) => {
          if (event.key === "Escape") onClose();
          if (event.key === "Tab") {
            const nodes = dialog.current?.querySelectorAll<HTMLElement>(
              "button:not([disabled]), select, a[href]",
            );
            if (!nodes?.length) return;
            const first = nodes[0],
              last = nodes[nodes.length - 1];
            if (
              event.shiftKey &&
              (document.activeElement === first ||
                document.activeElement === dialog.current)
            ) {
              event.preventDefault();
              last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault();
              first.focus();
            }
          }
          if (
            (event.target as HTMLElement).tagName === "SELECT" ||
            !activeMoment
          )
            return;
          if (event.key === "ArrowLeft")
            selectPhoto(
              (photoIndex + activeMoment.photos.length - 1) %
                activeMoment.photos.length,
            );
          if (event.key === "ArrowRight")
            selectPhoto((photoIndex + 1) % activeMoment.photos.length);
        }}
      >
        <header className="flex items-start justify-between gap-4 px-8 pt-7 pb-4">
          <div>
            <p className="text-xs font-bold text-[#fd6162]">
              {airport.code} · PHOTO JOURNEY
            </p>
            <h2 className="mt-2 text-2xl font-black">
              {airport.city}, {airport.country}
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {activeMoment?.date} · {activeMoment?.photos.length || 0}장
            </p>
          </div>
          <button
            type="button"
            aria-label="사진 모달 닫기"
            onClick={onClose}
            className="rounded-full border border-slate-200/70 bg-white/70 p-2.5 text-slate-500 transition-colors hover:bg-[#fd6162]/10 hover:text-[#fd6162] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#fd6162] dark:border-white/10 dark:bg-white/5 dark:text-neutral-400"
          >
            <MdClose size={24} />
          </button>
        </header>
        <div className="flex flex-wrap items-center justify-between gap-3 px-8">
          <label className="relative inline-flex items-center rounded-lg transition-colors hover:bg-black/[0.04] focus-within:ring-2 focus-within:ring-[#fd6162]/40 dark:hover:bg-white/[0.05]">
            <span className="sr-only">연도 선택</span>
            <select
              className="min-h-10 cursor-pointer appearance-none rounded-lg bg-transparent py-2 pl-2 pr-7 text-sm font-medium tabular-nums text-slate-600 outline-none dark:text-neutral-300 dark:[color-scheme:dark]"
              value={year}
              onChange={(event) => {
                setYear(event.target.value);
                selectMonth(
                  months.find((moment) =>
                    moment.date.startsWith(event.target.value),
                  )?.date || "",
                );
              }}
            >
              {years.map((value) => (
                <option
                  className="bg-white text-slate-900 dark:bg-neutral-900 dark:text-white"
                  key={value}
                  value={value}
                >
                  {value}년
                </option>
              ))}
            </select>
            <MdExpandMore
              size={16}
              className="pointer-events-none absolute right-1.5 text-slate-400 dark:text-neutral-500"
            />
          </label>
          {yearMonths.length > 8 && (
            <div className="flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 p-1 text-xs text-slate-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-neutral-400">
              <button
                aria-label="이전 월 구간"
                disabled={page === 0}
                className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-[#fd6162]/10 hover:text-[#fd6162] disabled:cursor-default disabled:opacity-25"
                onClick={() => selectMonth(yearMonths[0].date)}
              >
                <MdChevronLeft size={20} />
              </button>
              <span>
                {page + 1} / {Math.ceil(yearMonths.length / 8)}
              </span>
              <button
                aria-label="다음 월 구간"
                disabled={(page + 1) * 8 >= yearMonths.length}
                className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-[#fd6162]/10 hover:text-[#fd6162] disabled:cursor-default disabled:opacity-25"
                onClick={() => selectMonth(yearMonths[(page + 1) * 8].date)}
              >
                <MdChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
        {activeMoment ? (
          <>
            <TripJourneyTimeline
              key={`${year}-${page}`}
              moments={visibleMonths}
              activeMomentIndex={selectedIndex % 8}
              onMomentSelect={(index) => selectMonth(visibleMonths[index].date)}
              prefersReducedMotion={reduced}
            />
            <div className="min-h-0 flex-1 overflow-auto border-t border-dashed border-slate-200 p-6 dark:border-neutral-800">
              <TripPhotoCarousel
                activeMomentIndex={selectedIndex}
                activePhotoIndex={photoIndex}
                moment={activeMoment}
                onNext={() =>
                  selectPhoto((photoIndex + 1) % activeMoment.photos.length)
                }
                onPrevious={() =>
                  selectPhoto(
                    (photoIndex + activeMoment.photos.length - 1) %
                      activeMoment.photos.length,
                  )
                }
                onPhotoSelect={selectPhoto}
                prefersReducedMotion={reduced}
              />
            </div>
          </>
        ) : (
          <p className="p-8">등록된 사진이 없어요.</p>
        )}
      </div>
    </div>,
    document.body,
  );
}
