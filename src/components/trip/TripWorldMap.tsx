import { readFile } from "node:fs/promises";
import path from "node:path";

import TripWorldMapClient from "@/components/trip/TripWorldMapClient";

export default async function TripWorldMap() {
  const tripWorldMapPath = path.join(
    process.cwd(),
    "public/assets/images/trip-world-map.svg"
  );
  const tripWorldMapSvg = await readFile(tripWorldMapPath, "utf8");

  return <TripWorldMapClient svgMarkup={tripWorldMapSvg} />;
}
