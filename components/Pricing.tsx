"use client";

import { useBrandInfo } from "@/hooks/brandinfo-hook"
import Loading from "./ui/loading";
import { useOrderDetails } from "@/hooks/orderdetails-hook"

const Pricing = () => {
    const { data: orderDetails } = useOrderDetails();
    const brandInfo = useBrandInfo();
    if (!orderDetails || !brandInfo || orderDetails.products.length === 0) {
        return <Loading className="h-[207px]" />;
    }

    const prices = orderDetails.products.map((order) => order.price);
    const total = prices.reduce((prev, curr) => prev + curr)
    const delivery = 40
    const totalAmount = total + delivery
    return (
        <div className="w-full p-[24px] space-y-4 border border-[#F4F4F5] h-fit rounded-[8px]">
            <h2 className="font-semibold text-[12px] text-[#3F3F46] uppercase">
                price details
            </h2>

            <div className="text-[#71717A] text-[12px] flex flex-row justify-between">
                <p>Total MRP</p>
                <p>&#8377; {total.toFixed(2)}</p>
            </div>
            <div className="text-[#71717A] text-[12px] flex flex-row justify-between">
                <p>Delivery Fee</p>
                <p>&#8377; {delivery.toFixed(2)}</p>
            </div>
            <div className="text-[#3F3F46] text-[14px] flex flex-row font-bold justify-between">
                <p>Total Amount</p>
                <p>&#8377; {totalAmount.toFixed(2)}</p>
            </div>
        </div>
    );
};
export default Pricing;
