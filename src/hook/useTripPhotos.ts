"use client";
import { useCallback, useEffect, useState } from "react";
import type { TripPhoto } from "@/lib/trip/photos";
export function useTripPhotos(region?: string) {
  const [photos, setPhotos] = useState<TripPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [revision, setRevision] = useState(0);
  const reload = useCallback(() => setRevision((value) => value + 1), []);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError("");
    fetch(
      `/api/trip/photos${region ? `?region=${encodeURIComponent(region)}` : ""}`,
      { cache: "no-store", signal: controller.signal },
    )
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok) throw new Error(result.error);
        setPhotos(result.photos);
      })
      .catch((error) => {
        if (!controller.signal.aborted)
          setError(error.message || "사진을 불러오지 못했어요.");
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, [region, revision]);
  useEffect(() => {
    const interval = window.setInterval(reload, 45 * 60 * 1000);
    return () => window.clearInterval(interval);
  }, [reload]);
  return { photos, loading, error, reload };
}
