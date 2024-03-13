"use client";

import { useOrderDetails } from "@/providers/orderdetails-provider";
import Product from "./product";

interface OrdersProps {
    heading: string;
    page: "checkout" | "confirmation";
}

const Orders = ({ heading, page }: OrdersProps) => {
    const { data: orderDetails } = useOrderDetails();
    const imageDisable = page === "confirmation";
    const removeDisable = page === "confirmation";
    return (
        <div className="w-full border border-[#F4F4F5] p-[24px] rounded-[8px]">
            <h1 className="font-semibold text-[12px] text-[#3F3F46] uppercase">
                {heading}
            </h1>
            <div className="">
                {orderDetails?.products.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        imageDisable={imageDisable}
                        removeDisable={removeDisable}
                    />
                ))}
            </div>
        </div>
    );
};
export default Orders;
