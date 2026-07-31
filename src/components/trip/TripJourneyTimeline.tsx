"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "motion/react";

import TripMorphingPlaneIcon, {
  TRIP_PLANE_MORPH_DURATION_SECONDS,
} from "@/components/trip/TripMorphingPlaneIcon";
import { TRIP_JOURNEY_MOMENTS } from "@/constant/tripPhotoJourney";

type FlightPhase = "landing" | "parked" | "takeoff";

const FLIGHT_DURATION_SECONDS = 1.15;
const FLIGHT_DURATION_MS = FLIGHT_DURATION_SECONDS * 1000;
const LANDING_PHASE_AT_MS = 820;
const PLANE_MORPH_DURATION_MS = TRIP_PLANE_MORPH_DURATION_SECONDS * 1000;

type TripJourneyTimelineProps = {
  activeMomentIndex: number;
  onMomentSelect: (index: number) => void;
  prefersReducedMotion: boolean | null;
};

function getTimelinePosition(index: number) {
  return `${(index / (TRIP_JOURNEY_MOMENTS.length - 1)) * 100}%`;
}

export default function TripJourneyTimeline({
  activeMomentIndex,
  onMomentSelect,
  prefersReducedMotion,
}: TripJourneyTimelineProps) {
  const flightPathControls = useAnimationControls();
  const flightPhaseTimeoutsRef = useRef<number[]>([]);
  const [flight, setFlight] = useState({ from: 0, id: 0, to: 0 });
  const [flightPhase, setFlightPhase] = useState<FlightPhase>("parked");
  const isFlyingBackward = flight.to < flight.from;

  useEffect(() => {
    return () => {
      flightPhaseTimeoutsRef.current.forEach((timeout) =>
        window.clearTimeout(timeout),
      );
    };
  }, []);

  function selectMoment(nextIndex: number) {
    if (nextIndex === activeMomentIndex) return;

    flightPhaseTimeoutsRef.current.forEach((timeout) =>
      window.clearTimeout(timeout),
    );
    flightPhaseTimeoutsRef.current = [];

    setFlight((current) => ({
      from: activeMomentIndex,
      id: current.id + 1,
      to: nextIndex,
    }));

    if (prefersReducedMotion) {
      setFlightPhase("parked");
    } else {
      setFlightPhase("takeoff");
      flightPhaseTimeoutsRef.current = [
        window.setTimeout(
          () => setFlightPhase("landing"),
          PLANE_MORPH_DURATION_MS + LANDING_PHASE_AT_MS,
        ),
        window.setTimeout(
          () => setFlightPhase("parked"),
          PLANE_MORPH_DURATION_MS + FLIGHT_DURATION_MS,
        ),
      ];
    }

    void flightPathControls.start({
      rotate: prefersReducedMotion ? 0 : [0, -8, 0, 8, 0],
      scale: prefersReducedMotion ? 1 : [1, 1.08, 1.1, 1.04, 1],
      transition: {
        delay: prefersReducedMotion ? 0 : TRIP_PLANE_MORPH_DURATION_SECONDS,
        duration: prefersReducedMotion ? 0.2 : FLIGHT_DURATION_SECONDS,
        ease: [0.45, 0, 0.2, 1],
      },
      y: prefersReducedMotion ? 0 : [0, -30, -36, -18, 0],
    });

    onMomentSelect(nextIndex);
  }

  return (
    <div className="relative mx-8 h-[92px] shrink-0 sm:mx-14">
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[repeating-linear-gradient(90deg,rgba(148,163,184,0.55)_0_10px,transparent_10px_17px)] dark:bg-[repeating-linear-gradient(90deg,rgba(115,115,115,0.65)_0_10px,transparent_10px_17px)]" />
      <motion.div
        animate={{ width: getTimelinePosition(flight.to) }}
        className="absolute left-0 top-1/2 z-10 h-[2px] -translate-y-1/2 bg-[repeating-linear-gradient(90deg,#fd6162_0_10px,transparent_10px_17px)] drop-shadow-[0_0_5px_rgba(253,97,98,0.55)]"
        initial={{ width: getTimelinePosition(flight.from) }}
        transition={{
          delay:
            prefersReducedMotion || flight.id === 0
              ? 0
              : TRIP_PLANE_MORPH_DURATION_SECONDS,
          duration:
            prefersReducedMotion || flight.id === 0
              ? 0.2
              : FLIGHT_DURATION_SECONDS,
          ease: [0.45, 0, 0.2, 1],
        }}
      />

      {TRIP_JOURNEY_MOMENTS.map((moment, index) => {
        const isActive = index === activeMomentIndex;
        const tooltipPosition =
          index === 0
            ? "left-1/2"
            : index === TRIP_JOURNEY_MOMENTS.length - 1
              ? "right-1/2"
              : "left-1/2 -translate-x-1/2";

        return (
          <button
            aria-label={`${moment.date} 타임라인 보기`}
            aria-pressed={isActive}
            className="group absolute top-1/2 z-20 h-12 w-12 -translate-x-1/2 -translate-y-1/2 outline-none"
            key={moment.date}
            onClick={() => selectMoment(index)}
            style={{ left: getTimelinePosition(index) }}
            type="button"
          >
            <span
              className={`pointer-events-none absolute bottom-[calc(100%+5px)] whitespace-nowrap rounded-full bg-slate-950 px-3 py-1.5 text-[10px] font-bold tracking-[0.08em] text-white opacity-0 shadow-lg transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100 group-focus-visible:-translate-y-1 group-focus-visible:opacity-100 dark:bg-white dark:text-slate-950 ${tooltipPosition}`}
            >
              {moment.date}
            </span>
            <span
              className={`absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 ${
                isActive
                  ? "h-4 w-4 border-[#fd6162] bg-[#fd6162] shadow-[0_0_0_6px_rgba(253,97,98,0.14)]"
                  : "h-3 w-3 border-slate-300 bg-[#fffaf7] group-hover:h-4 group-hover:w-4 group-hover:border-[#fd6162] dark:border-neutral-600 dark:bg-[#111111]"
              }`}
            />
          </button>
        );
      })}

      <motion.div
        animate={{
          left: getTimelinePosition(flight.to),
        }}
        className="pointer-events-none absolute top-1/2 z-30"
        initial={{
          left: getTimelinePosition(flight.from),
        }}
        transition={{
          delay:
            prefersReducedMotion || flight.id === 0
              ? 0
              : TRIP_PLANE_MORPH_DURATION_SECONDS,
          duration:
            prefersReducedMotion || flight.id === 0
              ? 0.2
              : FLIGHT_DURATION_SECONDS,
          ease: [0.45, 0, 0.2, 1],
        }}
      >
        <motion.div
          animate={flightPathControls}
          initial={{ rotate: 0, scale: 1, y: 0 }}
        >
          <span className="relative flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#fd6162] shadow-[0_8px_22px_rgba(253,97,98,0.35)] ring-1 ring-[#fd6162]/15 dark:bg-neutral-900">
            <TripMorphingPlaneIcon
              isFlyingBackward={isFlyingBackward}
              isParked={flightPhase === "parked"}
              prefersReducedMotion={prefersReducedMotion}
            />
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
