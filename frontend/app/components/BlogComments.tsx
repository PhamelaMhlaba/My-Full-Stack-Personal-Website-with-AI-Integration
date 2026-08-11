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
    script.setAttribute("data-repo", "PhamelaMhlaba/My-Full-Stack-Personal-Website-with-AI-Integration");
    script.setAttribute("data-repo-id", "R_kgDOPaCpxQ");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDOPaCpxc4DDD_d");
    script.setAttribute("data-mapping", "pathname");
     script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "light");
    script.setAttribute("data-lang", "en");

    ref.current.appendChild(script);
  }, []);

  return <div ref={ref} />;
}