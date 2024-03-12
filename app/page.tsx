'use client'

import DarkmodeToggle from "@/components/ui/darkmode-toggle";
import { useBrandInfoStore } from "@/hooks/brandinfo-hook";
import { BrandInfoContext, useBrandInfo } from "@/providers/brandinfo-provider";
import { useContext, useEffect } from "react";

export default function Home() {
  const data = useBrandInfo()
  console.log(data)
  return (
    <div style={{background: data?.theme["--primary-foreground"]}}>
      {data?.merchantName}
      <DarkmodeToggle />
    </div>
  );
}
