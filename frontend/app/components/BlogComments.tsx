"use client";

import { useEffect, useRef } from "react";

interface BlogCommentsProps {
  slug: string;
  title: string;
  url: string;
}

export default function BlogComments({ slug, title, url }: BlogCommentsProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.innerHTML = "";

    const cusdisDiv = document.createElement("div");
    cusdisDiv.id = "cusdis_thread";
    cusdisDiv.setAttribute("data-host", "https://cusdis.com");
    cusdisDiv.setAttribute("data-app-id", "0cb4543e-4b7e-414e-9cda-cb074eb6e93d");
    cusdisDiv.setAttribute("data-page-id", slug);
    cusdisDiv.setAttribute("data-page-url", url);
    cusdisDiv.setAttribute("data-page-title", title);
    cusdisDiv.setAttribute("data-theme", "light");

    ref.current.appendChild(cusdisDiv);

    const script = document.createElement("script");
    script.src = "https://cusdis.com/js/cusdis.es.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [slug, title, url]);

  return <div ref={ref} />;
}