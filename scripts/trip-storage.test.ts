import assert from "node:assert/strict";
import {
  photoPath,
  uploadSchema,
  MAX_PHOTO_BYTES,
  tripDateSchema,
  tripToday,
} from "../src/lib/trip/storage";
const valid = {
  password: "test",
  region: "ICN",
  date: "2024-02-29",
  files: [
    {
      id: "00000000-0000-4000-8000-000000000001",
      type: "image/jpeg",
      size: 100,
    },
  ],
};
assert(uploadSchema.safeParse(valid).success);
for (const date of ["2025-02-29", "2026-04-31", "2026-1-01", "../2026-01"])
  assert(!uploadSchema.safeParse({ ...valid, date }).success);
assert(!uploadSchema.safeParse({ ...valid, region: "../ICN" }).success);
assert(!uploadSchema.safeParse({ ...valid, files: [] }).success);
assert(
  !uploadSchema.safeParse({ ...valid, files: Array(7).fill(valid.files[0]) })
    .success,
);
for (const file of [
  { ...valid.files[0], size: MAX_PHOTO_BYTES + 1 },
  { ...valid.files[0], type: "image/svg+xml" },
])
  assert(!uploadSchema.safeParse({ ...valid, files: [file] }).success);
assert.equal(
  photoPath("ICN", "2026-09-03", "uuid", "image/jpeg"),
  "ICN/2026-09/03/uuid.jpg",
);
console.log("Trip storage validation passed.");

assert(!tripDateSchema.safeParse("2999-01-01").success);
assert(tripDateSchema.safeParse(tripToday()).success);
assert.equal(tripToday(new Date("2026-09-09T15:00:00Z")), "2026-09-10");

import { groupPhotoMonths, type TripPhoto } from "../src/lib/trip/photos";
const photo = (date: string): TripPhoto => ({
  date,
  path: date,
  src: date,
  region: "ICN",
  createdAt: date,
  size: 1,
});
const grouped = groupPhotoMonths([
  photo("2026-09-09"),
  photo("2024-02-29"),
  photo("2026-09-02"),
]);
assert.equal(grouped.length, 2);
assert.equal(grouped[1].photos[0].time, "2026-09-02");
assert.equal(groupPhotoMonths([]).length, 0);
const fullYears = groupPhotoMonths(
  [2024, 2025, 2026].flatMap((year) =>
    Array.from({ length: 12 }, (_, month) =>
      photo(`${year}-${String(month + 1).padStart(2, "0")}-01`),
    ),
  ),
);
assert.equal(fullYears.length, 36);
for (const year of ["2024", "2025", "2026"]) {
  const months = fullYears.filter((month) => month.date.startsWith(year));
  assert.equal(months.slice(0, 8).length, 8);
  assert.equal(months.slice(8, 16).length, 4);
}
console.log(
  "Future dates, timezone, chronological month grouping and 8-stop pages passed.",
);
