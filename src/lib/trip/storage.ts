import { z } from "zod";
import { TRIP_REGIONS } from "@/constant/tripRegions";

export const TRIP_BUCKET = "trip-photos";
export const MAX_PHOTO_BYTES = 20 * 1024 * 1024;
export const PHOTO_TYPES: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/heic": "heic",
  "image/heif": "heif",
};
// Calendar dates use the blog's Korea timezone, including server validation.
export function tripToday(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}
export const tripDateSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/)
  .refine((value) => {
    const date = new Date(`${value}T00:00:00Z`);
    return (
      Number.isFinite(date.getTime()) &&
      date.toISOString().slice(0, 10) === value &&
      value <= tripToday()
    );
  });

export const uploadSchema = z.object({
  password: z.string().min(1).max(256),
  region: z
    .string()
    .refine((code) => TRIP_REGIONS.some((r) => r.code === code)),
  date: tripDateSchema,
  files: z
    .array(
      z.object({
        type: z.string().refine((type) => Boolean(PHOTO_TYPES[type])),
        size: z.number().int().positive().max(MAX_PHOTO_BYTES),
        id: z.string().uuid(),
      }),
    )
    .min(1)
    .max(6),
});
export function photoPath(
  region: string,
  date: string,
  id: string,
  type: string,
) {
  return `${region}/${date.slice(0, 7)}/${date.slice(8, 10)}/${id}.${PHOTO_TYPES[type]}`;
}
