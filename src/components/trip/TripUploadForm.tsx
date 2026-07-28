"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type DragEvent,
  type FormEvent,
} from "react";
import {
  MdAddPhotoAlternate,
  MdArrowBack,
  MdCalendarToday,
  MdCheck,
  MdClose,
  MdCloudUpload,
  MdLocationPin,
  MdLockOutline,
} from "react-icons/md";

import { TRIP_REGIONS } from "@/constant/tripRegions";

type UploadPhoto = {
  file: File;
  id: string;
  preview: string;
};

type FormErrors = {
  date?: string;
  password?: string;
  photos?: string;
  region?: string;
};

const MAX_PHOTO_COUNT = 6;
const UPLOAD_PASSWORD = "20000923";

export default function TripUploadForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const photosRef = useRef<UploadPhoto[]>([]);
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isDragging, setIsDragging] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [password, setPassword] = useState("");
  const [photos, setPhotos] = useState<UploadPhoto[]>([]);
  const [selectedRegionCode, setSelectedRegionCode] = useState("");

  const selectedRegion = TRIP_REGIONS.find(
    (region) => region.code === selectedRegionCode,
  );

  useEffect(() => {
    photosRef.current = photos;
  }, [photos]);

  useEffect(() => {
    return () => {
      photosRef.current.forEach((photo) => URL.revokeObjectURL(photo.preview));
    };
  }, []);

  function addPhotos(fileList: FileList | File[]) {
    const imageFiles = Array.from(fileList).filter((file) =>
      file.type.startsWith("image/"),
    );

    if (imageFiles.length === 0) {
      setErrors((current) => ({
        ...current,
        photos: "이미지 파일만 선택할 수 있어요.",
      }));
      return;
    }

    setPhotos((current) => {
      const availableCount = MAX_PHOTO_COUNT - current.length;
      const nextPhotos = imageFiles
        .slice(0, availableCount)
        .map((file, index) => ({
          file,
          id: `${file.name}-${file.lastModified}-${Date.now()}-${index}`,
          preview: URL.createObjectURL(file), // 선택한 파일을 미리보기 제공하기 위해 File/Blob 데이터 <img>가 접근할 임시 URL 제공 (<img src는 경로를 필요로 하기 때문)
        }));

      return [...current, ...nextPhotos];
    });
    setErrors((current) => ({ ...current, photos: undefined }));
    setIsSaved(false);
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      addPhotos(event.target.files);
    }

    event.target.value = "";
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
    addPhotos(event.dataTransfer.files);
  }

  function removePhoto(photoId: string) {
    setPhotos((current) => {
      const photoToRemove = current.find((photo) => photo.id === photoId);

      if (photoToRemove) {
        // 사진 미리보기 URL 제거
        URL.revokeObjectURL(photoToRemove.preview);
      }

      return current.filter((photo) => photo.id !== photoId);
    });
    setIsSaved(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: FormErrors = {};

    if (photos.length === 0)
      nextErrors.photos = "사진을 한 장 이상 추가해주세요.";
    if (!date) nextErrors.date = "여행 날짜를 선택해주세요.";
    if (!selectedRegion) nextErrors.region = "여행 지역을 선택해주세요.";
    if (!password) {
      nextErrors.password = "업로드 비밀번호를 입력해주세요.";
    } else if (password !== UPLOAD_PASSWORD) {
      nextErrors.password = "비밀번호가 일치하지 않아요.";
    }

    setErrors(nextErrors);
    setIsSaved(false);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSaved(true);
  }

  return (
    <div className="mx-auto w-full max-w-[1320px]">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-5">
        <div>
          <Link
            className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-[#fd6162] dark:text-neutral-400 dark:hover:text-[#fd7778]"
            href="/trip"
          >
            <MdArrowBack size={18} />
            여행 지도로 돌아가기
          </Link>
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#df7274] dark:text-[#fd7778]">
            New memory
          </p>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            여행의 한 장면을 남겨보세요.
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-neutral-400">
            사진과 날짜, 다녀온 지역을 선택해 여행 기록을 업로드하세요.
          </p>
        </div>
      </div>

      <form
        className="grid overflow-hidden rounded-[32px] border border-white/70 bg-white/72 shadow-[0_30px_100px_rgba(166,109,87,0.16)] backdrop-blur-xl dark:border-white/10 dark:bg-[#111111]/82 dark:shadow-[0_30px_100px_rgba(0,0,0,0.35)] lg:grid-cols-[minmax(340px,0.78fr)_minmax(520px,1.22fr)]"
        onSubmit={handleSubmit}
      >
        <div className="border-b border-slate-200/80 p-6 dark:border-white/10 sm:p-8 lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between gap-4">
            <label className="text-sm font-bold text-slate-900 dark:text-white">
              여행 사진
            </label>
            <span className="text-xs font-medium text-slate-400 dark:text-neutral-500">
              {photos.length} / {MAX_PHOTO_COUNT}
            </span>
          </div>

          <div
            className={`mt-3 flex min-h-[176px] cursor-pointer flex-col items-center justify-center rounded-[24px] border border-dashed px-6 py-8 text-center transition-all ${
              isDragging
                ? "border-[#fd6162] bg-[#fd6162]/10"
                : "border-slate-300 bg-[#fffaf7]/70 hover:border-[#df7274] hover:bg-[#fff5f1] dark:border-neutral-700 dark:bg-white/[0.025] dark:hover:border-[#fd6162]/70 dark:hover:bg-[#fd6162]/[0.06]"
            }`}
            onClick={() => fileInputRef.current?.click()}
            onDragEnter={() => setIsDragging(true)}
            onDragLeave={() => setIsDragging(false)}
            onDragOver={(event) => event.preventDefault()}
            onDrop={handleDrop}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                fileInputRef.current?.click();
              }
            }}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fd6162]/10 text-[#df7274] dark:bg-[#fd6162]/15 dark:text-[#fd7778]">
              <MdCloudUpload size={25} />
            </span>
            <p className="mt-4 text-sm font-bold text-slate-800 dark:text-neutral-100">
              사진을 끌어놓거나 클릭해서 선택
            </p>
            <p className="mt-1 text-xs text-slate-400 dark:text-neutral-500">
              이미지 파일을 최대 {MAX_PHOTO_COUNT}장까지 미리 볼 수 있어요
            </p>
            <input
              ref={fileInputRef}
              accept="image/*"
              className="sr-only"
              multiple
              onChange={handleFileChange}
              type="file"
            />
          </div>

          {errors.photos ? (
            <p className="mt-2 text-xs font-medium text-rose-500">
              {errors.photos}
            </p>
          ) : null}

          {photos.length > 0 ? (
            <div className="mt-4 grid grid-cols-3 gap-3">
              {photos.map((photo) => (
                <div
                  className="group relative aspect-square overflow-hidden rounded-[18px] bg-slate-100 dark:bg-neutral-800"
                  key={photo.id}
                >
                  <Image
                    alt={photo.file.name}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    fill
                    sizes="(max-width: 1024px) 26vw, 120px"
                    src={photo.preview}
                    unoptimized
                  />
                  <button
                    aria-label={`${photo.file.name} 삭제`}
                    className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur transition-colors hover:bg-black/75"
                    onClick={(event) => {
                      event.stopPropagation();
                      removePhoto(photo.id);
                    }}
                    type="button"
                  >
                    <MdClose size={16} />
                  </button>
                </div>
              ))}

              {photos.length < MAX_PHOTO_COUNT ? (
                <button
                  aria-label="사진 더 추가하기"
                  className="flex aspect-square items-center justify-center rounded-[18px] border border-dashed border-slate-300 text-slate-400 transition-colors hover:border-[#df7274] hover:text-[#df7274] dark:border-neutral-700 dark:text-neutral-500 dark:hover:border-[#fd6162] dark:hover:text-[#fd7778]"
                  onClick={() => fileInputRef.current?.click()}
                  type="button"
                >
                  <MdAddPhotoAlternate size={25} />
                </button>
              ) : null}
            </div>
          ) : null}

          <div className="mt-7">
            <label
              className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white"
              htmlFor="trip-date"
            >
              <MdCalendarToday className="text-[#df7274]" size={17} />
              여행 날짜
            </label>
            <input
              className="mt-3 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-[#df7274] dark:border-neutral-700 dark:bg-white/[0.04] dark:text-white dark:[color-scheme:dark]"
              id="trip-date"
              onChange={(event) => {
                setDate(event.target.value);
                setErrors((current) => ({ ...current, date: undefined }));
                setIsSaved(false);
              }}
              type="date"
              value={date}
            />
            {errors.date ? (
              <p className="mt-2 text-xs font-medium text-rose-500">
                {errors.date}
              </p>
            ) : null}
          </div>

          <div className="mt-7">
            <label
              className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white"
              htmlFor="trip-upload-password"
            >
              <MdLockOutline className="text-[#df7274]" size={18} />
              업로드 비밀번호
            </label>
            <input
              autoComplete="current-password"
              className="mt-3 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-300 focus:border-[#df7274] dark:border-neutral-700 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-neutral-600"
              id="trip-upload-password"
              inputMode="numeric"
              maxLength={8}
              onChange={(event) => {
                setPassword(event.target.value);
                setErrors((current) => ({
                  ...current,
                  password: undefined,
                }));
                setIsSaved(false);
              }}
              placeholder="비밀번호 8자리"
              type="password"
              value={password}
            />
            {errors.password ? (
              <p className="mt-2 text-xs font-medium text-rose-500">
                {errors.password}
              </p>
            ) : null}
          </div>
        </div>

        <div className="flex min-h-[520px] flex-col p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <MdLocationPin className="text-[#df7274]" size={19} />
                <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                  지역 선택
                </h2>
              </div>
              <p className="mt-1 text-xs text-slate-400 dark:text-neutral-500">
                여행한 도시를 하나 선택해주세요.
              </p>
            </div>

            <div
              className={`min-h-10 rounded-full border px-4 py-2 text-sm transition-colors ${
                selectedRegion
                  ? "border-[#df7274]/30 bg-[#fd6162]/10 font-bold text-[#c95355] dark:text-[#fd8b8c]"
                  : "border-slate-200 bg-white/60 text-slate-400 dark:border-neutral-700 dark:bg-white/[0.03] dark:text-neutral-500"
              }`}
            >
              {selectedRegion
                ? `${selectedRegion.city}, ${selectedRegion.country}`
                : "선택된 지역이 없어요"}
            </div>
          </div>

          <div
            aria-label="여행 지역 선택"
            className="mt-5 grid flex-1 content-start grid-cols-2 gap-3 rounded-[26px] border border-[#df7274]/10 bg-[#fff8f4]/70 p-3 dark:border-white/[0.06] dark:bg-black/20 sm:grid-cols-3 sm:p-5"
            role="group"
          >
            {TRIP_REGIONS.map((region) => {
              const isSelected = selectedRegionCode === region.code;

              return (
                <button
                  aria-pressed={isSelected}
                  className={`min-h-[112px] rounded-[20px] border p-4 text-left transition-all ${
                    isSelected
                      ? "border-[#fd6162] bg-[#fd6162] text-white shadow-[0_12px_28px_rgba(253,97,98,0.24)]"
                      : "border-white/80 bg-white/75 text-slate-700 hover:-translate-y-0.5 hover:border-[#df7274]/40 hover:bg-white dark:border-white/[0.07] dark:bg-white/[0.04] dark:text-neutral-200 dark:hover:border-[#fd6162]/40 dark:hover:bg-white/[0.07]"
                  }`}
                  key={region.code}
                  onClick={() => {
                    setSelectedRegionCode(region.code);
                    setErrors((current) => ({
                      ...current,
                      region: undefined,
                    }));
                    setIsSaved(false);
                  }}
                  type="button"
                >
                  <span
                    className={`text-[11px] font-black tracking-[0.18em] ${
                      isSelected
                        ? "text-white/70"
                        : "text-[#df7274] dark:text-[#fd7778]"
                    }`}
                  >
                    {region.code}
                  </span>
                  <span className="mt-3 block text-base font-black">
                    {region.city}
                  </span>
                  <span
                    className={`mt-1 block text-xs ${
                      isSelected
                        ? "text-white/75"
                        : "text-slate-400 dark:text-neutral-500"
                    }`}
                  >
                    {region.country}
                  </span>
                </button>
              );
            })}
          </div>

          {errors.region ? (
            <p className="mt-2 text-xs font-medium text-rose-500">
              {errors.region}
            </p>
          ) : null}

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <div aria-live="polite" className="min-h-6">
              {isSaved ? (
                <p className="flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10">
                    <MdCheck size={16} />
                  </span>
                  여행 기록 업로드가 완료됐어요!
                </p>
              ) : (
                <p className="text-xs text-slate-400 dark:text-neutral-500">
                  모든 항목을 입력한 뒤 업로드해주세요.
                </p>
              )}
            </div>

            <button
              className="min-w-[152px] rounded-full bg-[#fd6162] px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(253,97,98,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#ef5556] disabled:cursor-wait disabled:opacity-70"
              type="submit"
            >
              여행 기록 업로드
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
