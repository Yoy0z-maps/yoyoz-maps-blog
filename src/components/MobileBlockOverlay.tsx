"use client";

import { useEffect, useState } from "react";

const messages = [
  {
    lang: "English",
    title: "Please use a desktop",
    body: "GraphNode is optimized for desktop environments.\nMobile and tablet devices are not supported.",
  },
  {
    lang: "한국어",
    title: "데스크탑에서 이용해주세요",
    body: "GraphNode는 데스크탑 환경에 최적화되어 있습니다.\n모바일 및 태블릿에서는 지원되지 않습니다.",
  },
  {
    lang: "中文",
    title: "请使用桌面设备",
    body: "GraphNode 已针对桌面环境优化。\n不支持移动设备和平板电脑。",
  },
  {
    lang: "日本語",
    title: "デスクトップでご利用ください",
    body: "GraphNodeはデスクトップ環境に最適化されています。\nモバイル・タブレットはサポートされていません。",
  },
];

function isMobileOrTablet(): boolean {
  const ua = navigator.userAgent;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i.test(ua);
}

export default function MobileBlockOverlay() {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setVisible(isMobileOrTablet());
  }, []);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [visible]);

  if (!visible) return null;

  const msg = messages[index];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      {/* 아이콘 */}
      <div
        style={{
          marginBottom: "1.5rem",
          animation: "mbo-float 3s ease-in-out infinite",
        }}
      >
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.9)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      </div>

      {/* 텍스트 - key로 언어 전환 시 새 엘리먼트로 교체 */}
      <div
        key={index}
        style={{
          textAlign: "center",
          animation: "mbo-fadein 0.5s ease-out",
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
            marginBottom: "0.75rem",
            fontFamily: "sans-serif",
          }}
        >
          {msg.lang}
        </p>
        <h2
          style={{
            fontSize: "1.4rem",
            fontWeight: 700,
            color: "rgba(255,255,255,0.95)",
            marginBottom: "0.75rem",
            fontFamily: "sans-serif",
            lineHeight: 1.3,
          }}
        >
          {msg.title}
        </h2>
        <p
          style={{
            fontSize: "0.9rem",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.7,
            fontFamily: "sans-serif",
            whiteSpace: "pre-line",
          }}
        >
          {msg.body}
        </p>
      </div>

      {/* 언어 인디케이터 */}
      <div
        style={{
          display: "flex",
          gap: "6px",
          marginTop: "2rem",
        }}
      >
        {messages.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === index ? "20px" : "6px",
              height: "6px",
              borderRadius: "3px",
              backgroundColor:
                i === index ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.25)",
              transition: "all 0.4s ease",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes mbo-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes mbo-fadein {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}
