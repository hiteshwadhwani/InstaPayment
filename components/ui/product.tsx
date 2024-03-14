"use client";

import Image from "next/image";
import { ProductType, useOrderDetails, useOrderDetailsStore } from "@/hooks/orderdetails-hook";
import { useBrandInfo } from "@/hooks/brandinfo-hook"
import { Button } from "./button";
import { cn } from "@/lib/utilts";
import { useTheme } from "next-themes";

type ProductProps = {
    product: ProductType;
    imageDisable: boolean;
    removeDisable: boolean;
    lastItem: boolean
};

const Product = ({ product, imageDisable, removeDisable, lastItem }: ProductProps) => {
    const brandInfo = useBrandInfo();
    const {removeProduct} = useOrderDetailsStore()
    const title = product.title.split(" ").slice(0, 2).join(" ");
    const {theme} = useTheme()
    return (
        <div className={cn("min-h-[113px] py-[24px]  flex flex-row justify-between", !lastItem && "border-b border-[#F4F4F5] dark:border-[#494949]")}>
            <div className="flex flex-row items-center">
                {!imageDisable && (
                    <Image
                        src={product.image}
                        alt="product-image"
                        width={100}
                        height={100}
                        className="mr-4"
                    />
                )}

                <div className="flex flex-col justify-between h-full gap-y-2">
                    <h2 style={{color: theme === 'light' ? brandInfo?.theme["--background"] : brandInfo?.theme["--foreground"]}} className="text-[14px] font-semibold text-[#3F3F46]">
                        {title}
                    </h2>
                    <h4 className="text-[#71717A] text-[14px]">
                        {product.title}
                    </h4>
                    <div className="bg-[#F4F4F5] font-semibold text-[12px] w-fit py-1 px-[12px] rounded-[4px] dark:bg-gray-800">
                        Qty: {product.quantity}
                    </div>
                    <p style={{color: theme === 'light' ? brandInfo?.theme["--background"] : brandInfo?.theme["--foreground"]}} className="font-semibold text-[12px] text-[#3F3F46]">
                        &#8377;
                        {product.price}
                    </p>
                </div>
            </div>
            {!removeDisable && (
                <div>
                    <Button
                        style={{ color: brandInfo?.theme["--primary"] }}
                        className="uppercase font-semibold text-[12px] border-none"
                        variant={"link"}
                        onClick={() => removeProduct(product.id)}
                    >
                        Remove
                    </Button>
                </div>
            )}
        </div>
    );
};
export default Product;
