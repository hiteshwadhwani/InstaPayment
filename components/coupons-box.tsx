'use client'

import { BadgePercent } from "lucide-react";
import { Button } from "./ui/button";
import { useBrandInfo } from "@/hooks/brandinfo-hook"
import Loading from "./ui/loading";

const Coupon = () => {
    const brandInfo = useBrandInfo()
    if(!brandInfo){
        return <Loading />
    }

    return (
        <div className="h-[80px] p-[24px] border border-[#F4F4F5] items-center rounded-[8px] flex flex-row justify-between">
            <div className="flex flex-row gap-x-4">
                <BadgePercent className="h-5 w-5"  style={{color: brandInfo.theme["--primary"]}}/>
                <p className="text-[12px] font-semibold uppercase">Apply Coupons</p>
            </div>
            <div>
                <Button style={{color: brandInfo.theme["--primary"], backgroundColor: `${brandInfo.theme["--primary"].slice(0, -1)},5%)` }} className="uppercase font-semibold text-[12px] border-none shadow-none rounded-none hover:opacity-90">Apply
                </Button>
            </div>
        </div>
    );
};
export default Coupon;
