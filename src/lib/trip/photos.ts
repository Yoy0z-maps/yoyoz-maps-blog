import type { JourneyMoment } from "@/constant/tripPhotoJourney";
export type TripPhoto = {
  path: string;
  region: string;
  date: string;
  createdAt: string;
  size: number;
  src: string;
};
export function groupPhotoMonths(photos: TripPhoto[]): JourneyMoment[] {
  const months = new Map<string, TripPhoto[]>();
  for (const photo of photos) {
    const month = photo.date.slice(0, 7);
    months.set(month, [...(months.get(month) || []), photo]);
  }
  return Array.from(months)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, items]) => ({
      date,
      title: `${Number(date.slice(5))}월의 기록`,
      photos: items
        .sort(
          (a, b) =>
            a.date.localeCompare(b.date) ||
            a.createdAt.localeCompare(b.createdAt) ||
            a.path.localeCompare(b.path),
        )
        .map((photo) => ({
          src: photo.src,
          caption: `${photo.date} 여행 사진`,
          time: photo.date,
          path: photo.path,
        })),
    }));
}
