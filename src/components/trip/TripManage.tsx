"use client";
import { useState } from "react";
import Link from "next/link";
import { TRIP_REGIONS } from "@/constant/tripRegions";
import { useTripPhotos } from "@/hook/useTripPhotos";
import { tripToday } from "@/lib/trip/storage";
import type { TripPhoto } from "@/lib/trip/photos";
import TripStoredImage from "./TripStoredImage";

export default function TripManage() {
  const [region, setRegion] = useState("");
  const [month, setMonth] = useState("");
  const { photos, loading, error, reload } = useTripPhotos(region || undefined);
  const [password, setPassword] = useState("");
  const [editing, setEditing] = useState<TripPhoto | null>(null);
  const [newRegion, setNewRegion] = useState("");
  const [newDate, setNewDate] = useState("");
  const [deleting, setDeleting] = useState<TripPhoto | null>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  async function change(photo: TripPhoto, method: "PATCH" | "DELETE") {
    if (!password) {
      setMessage("업로드할 때 사용하는 비밀번호를 입력해주세요.");
      return;
    }
    setBusy(true);
    setMessage("");
    try {
      const response = await fetch("/api/trip/photos", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password,
          path: photo.path,
          ...(method === "PATCH" ? { region: newRegion, date: newDate } : {}),
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      setMessage(
        method === "PATCH"
          ? "사진의 지역과 날짜를 수정했어요."
          : "사진을 삭제했어요.",
      );
      setEditing(null);
      setDeleting(null);
      reload();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "요청에 실패했어요.");
    } finally {
      setBusy(false);
    }
  }
  const visible = photos.filter(
    (photo) => !month || photo.date.startsWith(month),
  );
  const inputStyle =
    "rounded-xl border border-slate-300 bg-white p-3 text-slate-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:[color-scheme:dark]";
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-8 pb-32 pt-32 text-slate-900 dark:text-white">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold tracking-widest text-[#fd6162]">
            PHOTO LIBRARY
          </p>
          <h1 className="mt-2 text-3xl font-black">여행 사진 관리</h1>
          <p className="mt-2 text-sm text-slate-500">
            사진을 조회하고 여행 지역·날짜를 수정하거나 삭제하세요.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/trip">여행 지도</Link>
          <Link href="/trip/upload" className="font-bold text-[#fd6162]">
            사진 업로드
          </Link>
        </div>
      </div>
      <div className="mb-6 flex flex-wrap items-end gap-4">
        <label className="grid gap-2 text-sm">
          지역
          <select
            className={inputStyle}
            value={region}
            onChange={(event) => setRegion(event.target.value)}
          >
            <option value="">전체 지역</option>
            {TRIP_REGIONS.map((r) => (
              <option key={r.code} value={r.code}>
                {r.city} ({r.code})
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm">
          연월
          <input
            type="month"
            className={inputStyle}
            value={month}
            onChange={(event) => setMonth(event.target.value)}
          />
        </label>
        <button
          onClick={() => {
            setMonth("");
            setRegion("");
          }}
          className="p-3 text-sm"
        >
          필터 초기화
        </button>
        <button disabled={busy} onClick={reload} className="p-3 text-sm">
          새로고침
        </button>
        <label className="ml-auto grid gap-2 text-sm">
          편집·삭제 비밀번호
          <input
            type="password"
            autoComplete="current-password"
            className={inputStyle}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <p role="status" className="mb-4 text-sm text-[#d95658]">
        {message}
      </p>
      {error ? (
        <p role="alert">
          {error} <button onClick={reload}>다시 시도</button>
        </p>
      ) : loading ? (
        <p role="status">사진을 불러오는 중…</p>
      ) : visible.length === 0 ? (
        <div className="rounded-3xl border border-dashed p-16 text-center text-slate-500">
          {photos.length
            ? "선택한 기간에 사진이 없어요."
            : "등록된 사진이 없어요."}
        </div>
      ) : (
        <>
          <p className="mb-4 text-sm text-slate-500">
            총 {visible.length}장 · 최근 업로드순
          </p>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
            {visible.map((photo) => (
              <article
                key={photo.path}
                className="overflow-hidden rounded-2xl border border-slate-200 dark:border-neutral-800"
              >
                <a
                  href={photo.src}
                  target="_blank"
                  rel="noreferrer"
                  className="relative block aspect-[4/3] bg-slate-100"
                >
                  <TripStoredImage
                    src={photo.src}
                    alt={`${photo.region} ${photo.date} 여행 사진`}
                    fill
                    sizes="33vw"
                    className="object-cover"
                  />
                </a>
                <div className="p-4">
                  <p className="font-bold">
                    {TRIP_REGIONS.find((r) => r.code === photo.region)?.city} ·{" "}
                    {photo.date}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {Math.ceil(photo.size / 1024)}KB · 사진을 누르면 원본 보기
                  </p>
                  {editing?.path === photo.path ? (
                    <form
                      className="mt-4 grid gap-3"
                      onSubmit={(event) => {
                        event.preventDefault();
                        void change(photo, "PATCH");
                      }}
                    >
                      <fieldset disabled={busy} className="grid gap-3">
                        <label className="grid gap-1 text-sm">
                          지역
                          <select
                            className={inputStyle}
                            value={newRegion}
                            onChange={(event) =>
                              setNewRegion(event.target.value)
                            }
                          >
                            {TRIP_REGIONS.map((r) => (
                              <option key={r.code} value={r.code}>
                                {r.city}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label className="grid gap-1 text-sm">
                          날짜
                          <input
                            required
                            type="date"
                            max={tripToday()}
                            value={newDate}
                            className={inputStyle}
                            onChange={(event) => setNewDate(event.target.value)}
                          />
                        </label>
                        <div className="flex gap-4">
                          <button
                            type="submit"
                            className="font-bold text-[#fd6162]"
                          >
                            {busy ? "저장 중…" : "저장"}
                          </button>
                          <button
                            type="button"
                            onClick={() => setEditing(null)}
                          >
                            취소
                          </button>
                        </div>
                      </fieldset>
                    </form>
                  ) : deleting?.path === photo.path ? (
                    <div className="mt-4 text-sm">
                      <p>이 사진을 영구 삭제할까요?</p>
                      <div className="mt-3 flex gap-4">
                        <button
                          disabled={busy}
                          className="font-bold text-rose-600"
                          onClick={() => void change(photo, "DELETE")}
                        >
                          {busy ? "삭제 중…" : "삭제 확인"}
                        </button>
                        <button
                          disabled={busy}
                          onClick={() => setDeleting(null)}
                        >
                          취소
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-4 flex gap-5 text-sm">
                      <button
                        disabled={busy}
                        onClick={() => {
                          setEditing(photo);
                          setNewRegion(photo.region);
                          setNewDate(photo.date);
                          setDeleting(null);
                        }}
                      >
                        편집
                      </button>
                      <button
                        disabled={busy}
                        className="text-rose-500"
                        onClick={() => {
                          setDeleting(photo);
                          setEditing(null);
                        }}
                      >
                        삭제
                      </button>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
