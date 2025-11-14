"use client";

import { useRef, useState } from "react";
import { LiquidGlass } from "@yoy0z-maps/react-liquid-glass";
import "@yoy0z-maps/react-liquid-glass/index.css";

export default function Page() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const draggingRef = useRef(false);
  const startRef = useRef({ x: 0, y: 0 });

  const onMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    draggingRef.current = true;
    startRef.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    };
  };

  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!draggingRef.current) return;
    setPos({
      x: e.clientX - startRef.current.x,
      y: e.clientY - startRef.current.y,
    });
  };

  const stopDrag = () => {
    draggingRef.current = false;
  };

  return (
    <div
      onMouseMove={onMouseMove}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: 'url("/assets/images/liquid-glass-bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] font-bold text-white">
        Liquid Glass
      </p>
      <div
        onMouseDown={onMouseDown}
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          cursor: "grab",
        }}
      >
        <LiquidGlass width={200} height={180} style={{ borderRadius: "0px" }}>
          <div className="flex h-full items-center justify-center"></div>
        </LiquidGlass>
      </div>
    </div>
  );
}
