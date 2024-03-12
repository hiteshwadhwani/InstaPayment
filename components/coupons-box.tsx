'use client'

import { BadgePercent } from "lucide-react";
import { Button } from "./ui/button";
import { useBrandInfo } from "@/providers/brandinfo-provider";
import Loading from "./ui/loading";

const Coupon = () => {
    const brandInfo = useBrandInfo()
    if(!brandInfo){
        return <Loading />
    }
    return (
        <div className="h-[80px] p-[24px] border border-[#F4F4F5] items-center rounded-[8px] flex flex-col justify-between md:flex-row">
            <div className="flex flex-row gap-x-4">
                <BadgePercent className="h-5 w-5"  style={{color: brandInfo.theme["--primary"]}}/>
                <p className="text-[12px] font-semibold uppercase">Apply Coupons</p>
            </div>
            <div>
                <Button style={{color: brandInfo.theme["--primary"]}} variant={'link'} className="uppercase font-semibold text-[12px] border-none">Apply</Button>
            </div>
        </div>
    );
};
export default Coupon;
