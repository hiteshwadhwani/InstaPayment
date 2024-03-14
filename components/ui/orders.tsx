"use client";

import { useOrderDetails } from "@/hooks/orderdetails-hook";
import Product from "./product";
import { useBrandInfo } from "@/hooks/brandinfo-hook";
import { useTheme } from "next-themes";

interface OrdersProps {
    heading: string;
    page: "checkout" | "confirmation";
}

const Orders = ({ heading, page }: OrdersProps) => {
    const { data: orderDetails } = useOrderDetails();
    const brandInfo = useBrandInfo()
    const { theme } = useTheme()
    const imageDisable = page === "confirmation";
    const removeDisable = page === "confirmation";
    return (
        <div className="w-full border border-[#F4F4F5] dark:border-[#494949] p-[24px] rounded-[8px] h-fit">
            <h1 style={{color: theme === 'light' ? brandInfo?.theme["--background"] : brandInfo?.theme["--foreground"]}} className="font-semibold text-[12px] text-[#3F3F46] uppercase">
                {heading}
            </h1>
            <div>
                {orderDetails?.products.map((product, idx) => {
                    const lastIndex = idx === orderDetails.products.length - 1
                    return (
                        <Product
                            key={product.id}
                            product={product}
                            imageDisable={imageDisable}
                            removeDisable={removeDisable}
                            lastItem={lastIndex}
                        />
                    );
                })}
            </div>
        </div>
    );
};
export default Orders;
