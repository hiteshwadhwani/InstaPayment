'use client'

import { useBrandInfo } from "@/providers/brandinfo-provider"
import Loading from "./ui/loading"
import { Button } from "./ui/button"

const PlaceorderButton = () => {
    const brandInfo = useBrandInfo()
    if(!brandInfo){
        return <Loading className="h-[64px]" />
    }
    return (
        <Button className="h-[64px] uppercase rounded-[6px] w-full text-white font-bold text-[14px] text-left" style={{backgroundColor: brandInfo.theme["--primary"]}}>place order</Button>
    )
}
export default PlaceorderButton