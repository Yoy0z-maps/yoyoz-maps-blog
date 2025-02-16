"use client";

import useNavActiveStore from "@/hook/useNavActive";
import { useEffect } from "react";

export default function NavHighlighter({ path }: { path: string }) {
  const { setPath } = useNavActiveStore();

  useEffect(() => {
    if (path) setPath(path);
  }, [path, setPath]);

  return <></>;
}
