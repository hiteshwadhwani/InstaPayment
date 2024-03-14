'use client'

import DarkmodeToggle from "@/components/ui/darkmode-toggle";
import { useBrandInfo } from "@/hooks/brandinfo-hook"

export default function Home() {
  const data = useBrandInfo()
  return (
    <div style={{background: data?.theme["--primary-foreground"]}}>
      {data?.merchantName}
      <DarkmodeToggle />
    </div>
  );
}
