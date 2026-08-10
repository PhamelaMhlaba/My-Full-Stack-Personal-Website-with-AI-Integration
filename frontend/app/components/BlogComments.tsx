"use client";

import { useEffect, useRef } from "react";

export default function BlogComments() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";

    // ⚠️ Replace these with YOUR values from https://giscus.app
    script.setAttribute("data-repo", "PhamelaMhlaba/YOUR_REPO_NAME");
    script.setAttribute("data-repo-id", "YOUR_REPO_ID");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "YOUR_CATEGORY_ID");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-theme", "light");
    script.setAttribute("data-lang", "en");

    ref.current.appendChild(script);
  }, []);

  return <div ref={ref} />;
}