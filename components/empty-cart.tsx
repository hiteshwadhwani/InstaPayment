'use client'

import Image from "next/image"
import { Button } from "./ui/button"
import { useBrandInfo } from "@/providers/brandinfo-provider"

const EmptyCart = () => {
    const brandInfo = useBrandInfo()
    return (
        <div className="flex h-[50vh] w-full items-center justify-center flex-col space-y-4">
            <Image src={"/bag.svg"} alt="bag" width={60} height={60} />
            <div>
                <h2 className="text-[16px] text-[#3F3F46] text-center">Your Bag is empty!</h2>
                <p className="text-[#71717A] text-[16px] text-center mt-1">Add some items to proceed</p>
            </div>
            <Button style={{color: brandInfo?.theme["--primary"], backgroundColor: `${brandInfo?.theme["--primary"].slice(0, -1)},5%)`}} className="text-[#71717A] border-none shadow-none rounded-none">
                Add from watchlist
            </Button>
        </div>
    )
}
export default EmptyCart