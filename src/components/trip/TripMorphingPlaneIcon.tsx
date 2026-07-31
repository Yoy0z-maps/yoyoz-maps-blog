"use client";

import { motion } from "motion/react";

type TripMorphingPlaneIconProps = {
  isFlyingBackward: boolean;
  isParked: boolean;
  prefersReducedMotion: boolean | null;
};

export const TRIP_PLANE_MORPH_DURATION_SECONDS = 1;

const PLANE_PATHS = {
  body: {
    parked:
      "M 7 28 C 5 28 3 30 3 32 C 3 34 5 36 7 36 L 48 36 C 55 36 61 34 61 32 C 61 30 55 28 48 28 Z",
    side: "M 7 29 C 5 29 3 31 3 33 C 3 36 5 38 8 38 L 49 38 C 56 38 61 35 61 32 C 61 30 56 29 49 29 Z",
  },
  lowerTail: {
    parked: "M 14 35 L 9 46 Q 8 48 11 46 L 24 35 Z",
    side: "M 14 35 L 12 37 Q 11 38 14 37 L 24 35 Z",
  },
  lowerWing: {
    parked: "M 27 35 L 19 56 Q 18 58 21 57 L 40 35 Z",
    side: "M 27 35 L 23 39 Q 22 40 25 39 L 40 35 Z",
  },
  upperTail: {
    parked: "M 14 29 L 9 18 Q 8 16 11 18 L 24 29 Z",
    side: "M 14 29 L 12 27 Q 11 26 14 27 L 24 29 Z",
  },
  upperWing: {
    parked: "M 27 29 L 19 8 Q 18 6 21 7 L 40 29 Z",
    side: "M 27 29 L 23 25 Q 22 24 25 25 L 40 29 Z",
  },
} as const;

/*
 * motion.path: 일반 SVG <path>를 Motion이 애니메이션할 수 있도록 확장한 컴포넌트
 * animate: SVG가 최종적으로 어떤 모습이 되어야 하는지 결정
 * shapeTransition: 그 모습까지 얼마나 빠르게, 어떤 속도 변화로 이동할지 결정
 */
export default function TripMorphingPlaneIcon({
  isFlyingBackward,
  isParked,
  prefersReducedMotion,
}: TripMorphingPlaneIconProps) {
  const shapeTransition = {
    duration: prefersReducedMotion ? 0.5 : TRIP_PLANE_MORPH_DURATION_SECONDS,
    ease: [0.4, 0, 0.2, 1] as const,
  };

  return (
    <svg
      aria-hidden="true"
      className={`h-[23px] w-[23px] overflow-visible ${
        isFlyingBackward ? "-scale-x-100" : ""
      }`}
      fill="none"
      viewBox="0 0 64 64"
    >
      <motion.path
        animate={{
          d: isParked
            ? PLANE_PATHS.upperWing.parked
            : PLANE_PATHS.upperWing.side,
        }}
        fill="currentColor"
        transition={shapeTransition}
      />
      <motion.path
        animate={{
          d: isParked
            ? PLANE_PATHS.lowerWing.parked
            : PLANE_PATHS.lowerWing.side,
        }}
        fill="currentColor"
        transition={shapeTransition}
      />
      <motion.path
        animate={{
          d: isParked
            ? PLANE_PATHS.upperTail.parked
            : PLANE_PATHS.upperTail.side,
        }}
        fill="currentColor"
        transition={shapeTransition}
      />
      <motion.path
        animate={{
          d: isParked
            ? PLANE_PATHS.lowerTail.parked
            : PLANE_PATHS.lowerTail.side,
        }}
        fill="currentColor"
        transition={shapeTransition}
      />

      <motion.path
        animate={{
          opacity: isParked ? 0 : 1,
          scaleY: isParked ? 0.35 : 1,
        }}
        d="M 12 29 L 15 15 Q 16 13 18 15 L 26 29 Z"
        fill="currentColor"
        style={{ originX: "19px", originY: "29px" }}
        transition={shapeTransition}
      />

      <motion.path
        animate={{
          d: isParked ? PLANE_PATHS.body.parked : PLANE_PATHS.body.side,
        }}
        fill="currentColor"
        transition={shapeTransition}
      />

      {[35, 42, 49].map((cx, index) => (
        <motion.circle
          animate={{
            opacity: isParked ? 0 : 0.82,
            scale: isParked ? 0.25 : 1,
          }}
          className="fill-white dark:fill-neutral-900"
          cx={cx}
          cy={33}
          key={cx}
          r={index === 2 ? 1.35 : 1.15}
          style={{ originX: `${cx}px`, originY: "33px" }}
          transition={{
            ...shapeTransition,
            delay: prefersReducedMotion || isParked ? 0 : index * 0.035,
          }}
        />
      ))}
    </svg>
  );
}
