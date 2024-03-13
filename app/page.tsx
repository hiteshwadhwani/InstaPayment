'use client'

import DarkmodeToggle from "@/components/ui/darkmode-toggle";
import { useBrandInfo } from "@/providers/brandinfo-provider";

export default function Home() {
  const data = useBrandInfo()
  return (
    <div style={{background: data?.theme["--primary-foreground"]}}>
      {data?.merchantName}
      <DarkmodeToggle />
    </div>
  );
}
