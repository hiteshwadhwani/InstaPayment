"use client";

import { useOrderDetails } from "@/hooks/orderdetails-hook";
import { useBrandInfo } from "@/providers/brandinfo-provider";
import Loading from "./ui/loading";

const Pricing = () => {
    const { data: orderDetails } = useOrderDetails();
    const brandInfo = useBrandInfo();
    if (!orderDetails || !brandInfo) {
        return <Loading className="h-[207px]" />;
    }

    const prices = orderDetails.products.map((order) => order.price);
    const total = prices.reduce((prev, curr) => prev + curr).toFixed(2);
    const delivery = 40
    return (
        <div className="w-full p-[24px] space-y-4 border border-[#F4F4F5]">
            <h2 className="font-semibold text-[12px] text-[#3F3F46] uppercase">
                price details
            </h2>

            <div className="text-[#71717A] text-[12px] flex flex-row justify-between">
                <p>Total MRP</p>
                <p>&#8377; {total}</p>
            </div>
            <div className="text-[#71717A] text-[12px] flex flex-row justify-between">
                <p>Delivery Fee</p>
                <p>&#8377; {delivery}</p>
            </div>
            <div className="text-[#3F3F46] text-[14px] flex flex-row font-bold justify-between">
                <p>Total Amount</p>
                <p>&#8377; {total + delivery}</p>
            </div>
        </div>
    );
};
export default Pricing;
