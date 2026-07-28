export type TripRegion = {
  airport: string;
  city: string;
  code: string;
  country: string;
  cx: number;
  cy: number;
};

export const TRIP_REGIONS: TripRegion[] = [
  {
    airport: "Incheon International Airport",
    city: "Incheon",
    code: "ICN",
    country: "South Korea",
    cx: 690.5,
    cy: 198.5,
  },
  {
    airport: "Narita International Airport",
    city: "Narita",
    code: "NRT",
    country: "Japan",
    cx: 710.8,
    cy: 205.3,
  },
  {
    airport: "Beijing Capital International Airport",
    city: "Beijing",
    code: "PEK",
    country: "China",
    cx: 656.6,
    cy: 191.7,
  },
  {
    airport: "Heathrow Airport",
    city: "London",
    code: "LHR",
    country: "United Kingdom",
    cx: 392.1,
    cy: 151,
  },
  {
    airport: "Charles de Gaulle Airport",
    city: "Paris",
    code: "CDG",
    country: "France",
    cx: 405.6,
    cy: 171.3,
  },
  {
    airport: "Leonardo da Vinci–Fiumicino Airport",
    city: "Rome",
    code: "FCO",
    country: "Italy",
    cx: 432.8,
    cy: 191.7,
  },
  {
    airport: "Zurich Airport",
    city: "Zurich",
    code: "ZRH",
    country: "Switzerland",
    cx: 426,
    cy: 171.3,
  },
  {
    airport: "Vienna International Airport",
    city: "Vienna",
    code: "VIE",
    country: "Austria",
    cx: 439.5,
    cy: 171.3,
  },
  {
    airport: "Budapest Ferenc Liszt International Airport",
    city: "Budapest",
    code: "BUD",
    country: "Hungary",
    cx: 453.1,
    cy: 171.3,
  },
];

export function getTripRegionKey(cx: number, cy: number) {
  return `${cx.toFixed(1)},${cy.toFixed(1)}`;
}

// 새로운 Map객체 생성 (검색용 인덱스)
// decorateTripMapSvg()가 SVG의 모든 circle을 다 검사하는데 이때마다 확인해서 (배열이면 시간복잡도가 높음)
export const TRIP_REGIONS_BY_KEY = new Map(
  TRIP_REGIONS.map((region) => [
    getTripRegionKey(region.cx, region.cy),
    region,
  ]),
);

// SVG에서 HIGHLIGHT_AIRPORT에서 지정한 좌표에 해당하는 circle만 trip-highlight로 변경
export function decorateTripMapSvg(svgMarkup: string) {
  return svgMarkup.replace(
    /<circle class="([^"]+)" cx="([0-9.]+)" cy="([0-9.]+)" r="([0-9.]+)"\/>/g,
    (match, className: string, cxValue: string, cyValue: string) => {
      const key = getTripRegionKey(Number(cxValue), Number(cyValue));

      if (!TRIP_REGIONS_BY_KEY.has(key)) {
        return match;
      }

      return `<circle class="${className} trip-highlight" data-airport-key="${key}" cx="${cxValue}" cy="${cyValue}" r="1.9"/>`;
    },
  );
}
