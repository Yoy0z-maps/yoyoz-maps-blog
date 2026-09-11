"use client";
import Image, { type ImageProps } from "next/image";
import { useState } from "react";
export default function TripStoredImage(props: ImageProps) {
  const [failedSrc, setFailedSrc] = useState<ImageProps["src"] | null>(null);
  if (failedSrc === props.src)
    return (
      <span className="absolute inset-0 flex items-center justify-center bg-slate-200 p-2 text-center text-xs text-slate-600">
        미리보기 불가
      </span>
    );
  return (
    <Image
      {...props}
      alt={props.alt}
      unoptimized
      onError={() => setFailedSrc(props.src)}
    />
  );
}
