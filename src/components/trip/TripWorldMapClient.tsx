"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import TripAirportTicket from "@/components/trip/TripAirportTicket";

type HighlightAirport = {
  airport: string;
  city: string;
  code: string;
  country: string;
  cx: number;
  cy: number;
};

type ActiveTicket = {
  airport: HighlightAirport;
  circleKey: string;
  left: number;
  top: number;
};

const HIGHLIGHT_AIRPORTS: HighlightAirport[] = [
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

const TICKET_HEIGHT = 198;
const TICKET_OFFSET = 20;
const TICKET_WIDTH = 292;

// 새로운 Map객체 생성 (검색용 인덱스)
// decorateTripMapSvg()가 SVG의 모든 circle을 다 검사하는데 이때마다 확인해서 (배열이면 시간복잡도가 높음)
const HIGHLIGHT_AIRPORTS_BY_KEY = new Map(
  HIGHLIGHT_AIRPORTS.map((airport) => [
    `${airport.cx.toFixed(1)},${airport.cy.toFixed(1)}`,
    airport,
  ]),
);

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getCoordinateKey(cx: number, cy: number) {
  return `${cx.toFixed(1)},${cy.toFixed(1)}`;
}

// SVG에서 HIGHLIGHT_AIRPORT에서 지정한 좌표에 해당하는 circle만 trip-highlight로 변경
function decorateTripMapSvg(svgMarkup: string) {
  return svgMarkup.replace(
    /<circle class="([^"]+)" cx="([0-9.]+)" cy="([0-9.]+)" r="([0-9.]+)"\/>/g,
    (match, className: string, cxValue: string, cyValue: string) => {
      const cx = Number(cxValue);
      const cy = Number(cyValue);
      const key = getCoordinateKey(cx, cy);

      if (!HIGHLIGHT_AIRPORTS_BY_KEY.has(key)) {
        return match;
      }

      return `<circle class="${className} trip-highlight" data-airport-key="${key}" cx="${cxValue}" cy="${cyValue}" r="1.9"/>`;
    },
  );
}

export default function TripWorldMapClient({
  svgMarkup,
}: {
  svgMarkup: string;
}) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [activeTicket, setActiveTicket] = useState<ActiveTicket | null>(null);

  const decoratedSvgMarkup = useMemo(
    () => decorateTripMapSvg(svgMarkup),
    [svgMarkup],
  );

  const closeActiveTicket = useCallback(() => {
    const selectedCircle = mapRef.current?.querySelector(
      "circle.trip-selected",
    );

    if (selectedCircle instanceof SVGCircleElement) {
      selectedCircle.classList.remove("trip-selected");
    }

    setActiveTicket(null);
  }, []);

  const openTicketFromCircle = useCallback(
    (circle: SVGCircleElement) => {
      const circleKey = circle.getAttribute("data-airport-key");
      const mapElement = mapRef.current;

      if (!circleKey || !mapElement) {
        closeActiveTicket();
        return;
      }

      const airport = HIGHLIGHT_AIRPORTS_BY_KEY.get(circleKey);
      const cx = Number(circle.getAttribute("cx"));
      const cy = Number(circle.getAttribute("cy"));

      if (!airport || Number.isNaN(cx) || Number.isNaN(cy)) {
        closeActiveTicket();
        return;
      }

      // getBoundingClientRect() 요소의 위치와 크기 반환 (left, top, width, height)
      const mapRect = mapElement.getBoundingClientRect(); // 전체 DOM
      const circleRect = circle.getBoundingClientRect(); // 클릭한 원
      // 클릭한 원의 중심 좌표 게산
      const circleCenterX =
        circleRect.left - mapRect.left + circleRect.width / 2;
      const circleCenterY =
        circleRect.top - mapRect.top + circleRect.height / 2;

      //티켓을 점의 좌우 중 어디에 띄울지 결정하는 조건
      const preferRight = circleCenterX < mapRect.width * 0.65;
      const rawLeft = preferRight
        ? circleCenterX + TICKET_OFFSET
        : circleCenterX - TICKET_WIDTH - TICKET_OFFSET;

      const selectedCircle = mapElement.querySelector("circle.trip-selected");

      if (selectedCircle instanceof SVGCircleElement) {
        selectedCircle.classList.remove("trip-selected");
      }

      circle.classList.add("trip-selected");

      // console.log("[TripMap] clicked region", {
      //   airport: airport.airport,
      //   city: airport.city,
      //   code: airport.code,
      //   country: airport.country,
      //   matchedCoordinate: { cx, cy },
      // });

      // clamp(value, min, max): 사이 값은 value, 범위보다 작으면 min, 범위 초과하면 max 반환
      setActiveTicket({
        airport,
        circleKey,
        left: clamp(
          rawLeft,
          16,
          Math.max(16, mapRect.width - TICKET_WIDTH - 16),
        ),
        top: clamp(
          circleCenterY - TICKET_HEIGHT / 2,
          16,
          Math.max(16, mapRect.height - TICKET_HEIGHT - 16),
        ),
      });
    },
    [closeActiveTicket],
  );

  // 창 크기 변경 시 티켓 위치 다시 계산
  useEffect(() => {
    const mapElement = mapRef.current;

    if (!mapElement) return;

    const highlightedCircles = mapElement.querySelectorAll<SVGCircleElement>(
      "circle.trip-highlight",
    );

    highlightedCircles.forEach((circle) => {
      const circleKey = circle.getAttribute("data-airport-key");
      const airport = circleKey
        ? HIGHLIGHT_AIRPORTS_BY_KEY.get(circleKey)
        : null;

      if (!airport) return;

      circle.setAttribute("tabindex", "0");
      circle.setAttribute("role", "button");
      circle.setAttribute(
        "aria-label",
        `Open ${airport.country} airport ticket`,
      );
    });
  }, [decoratedSvgMarkup]);

  useEffect(() => {
    if (!activeTicket) return;

    const activeCircleKey = activeTicket.circleKey;

    function handleResize() {
      const activeCircle = mapRef.current?.querySelector<SVGCircleElement>(
        `circle[data-airport-key="${activeCircleKey}"]`,
      );

      if (activeCircle) {
        openTicketFromCircle(activeCircle);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeTicket, openTicketFromCircle]);

  return (
    <div className="relative h-full w-full">
      <div
        ref={mapRef}
        aria-label="Trip world map"
        className="trip-map h-full w-full"
        onMouseDown={(event) => {
          const target = event.target;

          if (!(target instanceof Element)) return;

          const circle = target.closest("circle.trip-highlight");

          if (!(circle instanceof SVGCircleElement)) return;

          event.preventDefault();
        }}
        onClick={(event) => {
          const target = event.target;

          // 이벤트가 발생한 대상이 진짜 DOM 요소인지 확인
          if (!(target instanceof Element)) {
            closeActiveTicket();
            return;
          }

          // 현재 요소 자신부터 시작해서 부모 방향으로 올라가며 조건에 맞는 가장 가까운 요소 반환 (없으면 null)
          const circle = target.closest("circle.trip-highlight");

          // SVG의 <circle> 요소인지 확인
          if (!(circle instanceof SVGCircleElement)) {
            closeActiveTicket();
            return;
          }

          openTicketFromCircle(circle);
        }}
        onKeyDown={(event) => {
          if (event.key !== "Enter" && event.key !== " ") return;

          const target = event.target;

          if (!(target instanceof Element)) return;

          const circle = target.closest("circle.trip-highlight");

          if (!(circle instanceof SVGCircleElement)) return;

          event.preventDefault();
          openTicketFromCircle(circle);
        }}
        role="img"
        dangerouslySetInnerHTML={{ __html: decoratedSvgMarkup }}
      />

      {activeTicket ? (
        <TripAirportTicket
          airport={activeTicket.airport}
          left={activeTicket.left}
          onClose={closeActiveTicket}
          top={activeTicket.top}
        />
      ) : null}
    </div>
  );
}
