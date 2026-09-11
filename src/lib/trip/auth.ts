import "server-only";
import { createHash, timingSafeEqual } from "node:crypto";
export function validTripPassword(password: string) {
  const expected = process.env.TRIP_UPLOAD_PASSWORD;
  if (!expected) return false;
  const hash = (value: string) => createHash("sha256").update(value).digest();
  return timingSafeEqual(hash(password), hash(expected));
}
