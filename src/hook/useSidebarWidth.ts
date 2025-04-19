import { useEffect, useState } from "react";

export default function useSidebarWidth() {
  const [sidebarWidth, setSidebarWidth] = useState(0);

  useEffect(() => {
    const sidebar = document.getElementById("admin-sidebar")?.offsetWidth;
    if (sidebar) {
      setSidebarWidth(sidebar + 36);
    }
  }, []);

  return sidebarWidth;
}
