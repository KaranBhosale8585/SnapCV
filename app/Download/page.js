"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const DownloadCV = dynamic(() => import("@/components/DownloadCV"), {
  ssr: false,
});

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DownloadCV />
    </Suspense>
  );
}
