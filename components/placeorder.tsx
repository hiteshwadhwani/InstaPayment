'use client'

import { useBrandInfo } from "@/hooks/brandinfo-hook"
import Loading from "./ui/loading"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

const PlaceorderButton = () => {
    const brandInfo = useBrandInfo()
    const router = useRouter()
    if(!brandInfo){
        return <Loading className="h-[64px]" />
    }
    return (
        <Button onClick={() => router.push("/payment")} className="h-[64px] uppercase rounded-[6px] w-full text-white font-bold text-[14px] flex justify-between group p-[24px]" style={{backgroundColor: brandInfo.theme["--primary"]}}>
            place order
            <span>
                <ArrowRight className="size-6 group-hover:translate-x-1 transition" />
            </span>
            </Button>
    )
}
export default PlaceorderButton