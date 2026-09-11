"use client";

import Image from "@/components/trip/TripStoredImage";
import type { TripPhoto } from "@/lib/trip/photos";
import { useMemo, useState } from "react";
import { MdClose, MdFlightTakeoff } from "react-icons/md";
import TripPhotoJourneyModal from "@/components/trip/TripPhotoJourneyModal";

type TripAirportTicketProps = {
  airport: {
    airport: string;
    city: string;
    code: string;
    country: string;
  };
  photos: TripPhoto[];
  loading: boolean;
  error: string;
  reload: () => void;
  left: number;
  top: number;
  onClose: () => void;
};

const PHOTO_LAYER_STYLES = [
  "left-0 top-4 -rotate-[11deg]",
  "left-2 top-2 rotate-[4deg]",
  "left-4 top-0 rotate-[10deg]",
  "left-6 top-3 -rotate-[6deg]",
] as const;

function generateBarcodeModules(seed: string) {
  const modules: Array<{ type: "bar" | "space"; width: number }> = [];
  let seedValue = Array.from(seed).reduce(
    (total, character) => total + character.charCodeAt(0),
    0,
  );

  function seededRandom() {
    seedValue = (seedValue * 9301 + 49297) % 233280;
    return seedValue / 233280;
  }

  for (let index = 0; index < 30; index += 1) {
    modules.push({
      type: "bar",
      width: seededRandom() < 0.2 ? 1 : Math.floor(seededRandom() * 4) + 1,
    });
    modules.push({
      type: "space",
      width: Math.floor(seededRandom() * 2) + 1,
    });
  }

  return modules;
}

export default function TripAirportTicket({
  airport,
  photos,
  loading,
  error,
  reload,
  left,
  top,
  onClose,
}: TripAirportTicketProps) {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [initialPhotoPath, setInitialPhotoPath] = useState("");
  const status = useMemo(
    () =>
      airport.code.charCodeAt(0) % 5 !== 0
        ? {
            label: "Boarding",
            className: "text-emerald-600 dark:text-emerald-400",
          }
        : {
            label: "Final Call",
            className: "text-rose-600 dark:text-rose-400",
          },
    [airport.code],
  );

  const barcodeModules = useMemo(
    () => generateBarcodeModules(airport.code),
    [airport.code],
  );

  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-20">
        <div
          className="trip-ticket pointer-events-auto absolute w-[292px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-[28px] bg-white/95 text-slate-900 dark:bg-[#131313]/94 dark:text-white"
          style={{
            left,
            top,
          }}
        >
          <div className="flex items-start justify-between px-5 pb-4 pt-5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400 dark:text-neutral-500">
                Trip Ticket
              </p>
              <div className="mt-2 flex items-center gap-3">
                <p className="text-4xl font-black tracking-[0.18em] text-slate-950">
                  {airport.code}
                </p>
                <div className="h-px w-10 border-t border-dashed border-slate-300 dark:border-neutral-700" />
                <MdFlightTakeoff className="text-[#fd6162]" size={24} />
              </div>
            </div>

            <button
              aria-label="Close airport ticket"
              className="rounded-full bg-slate-100 p-1 text-slate-500 transition-colors duration-300 hover:bg-slate-200 hover:text-slate-900 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:hover:text-white"
              onClick={onClose}
              type="button"
            >
              <MdClose size={18} />
            </button>
          </div>

          <div className="border-y border-dashed border-slate-200 px-5 py-4 dark:border-neutral-800">
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400 dark:text-neutral-500">
                  Airport
                </p>
                <p className="mt-1 text-sm font-semibold leading-5 text-slate-900">
                  {airport.airport}
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400 dark:text-neutral-500">
                  Country
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  {airport.country}
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400 dark:text-neutral-500">
                  City
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  {airport.city}
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400 dark:text-neutral-500">
                  Status
                </p>
                <p className={`mt-1 text-sm font-semibold ${status.className}`}>
                  {status.label}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-end gap-4 px-5 py-4">
            <div
              aria-label={`${airport.city} 여행 사진 열기`}
              className="relative h-[64px] w-[68px] shrink-0"
              role="group"
            >
              {loading ? <span className="text-xs text-slate-500">불러오는 중…</span> : error ? <button type="button" onClick={reload} className="text-xs text-rose-500">조회 실패 · 재시도</button> : photos.length === 0 ? <span className="flex h-14 w-16 items-center justify-center rounded-xl border border-dashed border-slate-300 text-center text-[10px] text-slate-500">사진이<br />없어요</span> : photos.slice(0, 4).map((photo, index) => (
                <button
                  aria-label={`${airport.city} 여행 사진 ${index + 1} 보기`}
                  className={`group absolute h-11 w-11 overflow-hidden rounded-[12px] border border-white/80 bg-slate-200 shadow-[0_8px_18px_rgba(15,23,42,0.16)] transition-transform duration-300 ease-out hover:z-20 hover:-translate-y-1.5 hover:scale-[1.08] hover:shadow-[0_14px_28px_rgba(15,23,42,0.22)] focus-visible:z-20 focus-visible:-translate-y-1.5 focus-visible:scale-[1.08] dark:border-white/20 dark:bg-neutral-800 ${PHOTO_LAYER_STYLES[index]}`}
                  key={photo.path}
                  onClick={() => {
                    setInitialPhotoPath(photo.path);
                    setIsPhotoModalOpen(true);
                  }}
                  type="button"
                >
                  <Image
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    fill
                    sizes="44px"
                    src={photo.src}
                  />
                </button>
              ))}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex h-[64px] items-end rounded-[12px] bg-white/70 px-2 py-2 text-slate-900 dark:bg-white/88">
                <div
                  aria-hidden="true"
                  className="flex h-full w-full items-stretch overflow-hidden"
                >
                  {barcodeModules.map((module, index) => (
                    <span
                      key={`${module.type}-${index}-${module.width}`}
                      className={
                        module.type === "bar"
                          ? "shrink-0 bg-current"
                          : "shrink-0"
                      }
                      style={{
                        flex: `${module.width} 0 0px`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isPhotoModalOpen ? (
        <TripPhotoJourneyModal
          airport={airport}
          initialPhotoPath={initialPhotoPath}
          photos={photos}
          onClose={() => setIsPhotoModalOpen(false)}
        />
      ) : null}
    </>
  );
}
