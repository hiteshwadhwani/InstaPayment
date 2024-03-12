"use client";

import Image from "next/image";
import { ProductType } from "../order-list";
import { useBrandInfo } from "@/providers/brandinfo-provider";
import { Button } from "./button";

type ProductProps = {
    product: ProductType;
};

const Product = ({ product }: ProductProps) => {
    const brandInfo = useBrandInfo();
    const title = product.title.split(" ").slice(0, 2).join(" ")
    return (
        <div className="min-h-[113px] py-[24px] pl-[24px]  flex flex-row justify-between border-b border-[#F4F4F5]">
            <div className="flex flex-row items-center">
                <Image
                    src={product.image}
                    alt="product-image"
                    width={100}
                    height={100}
                    className="mr-4"
                />
                <div className="flex flex-col justify-between h-full gap-y-2">
                    <h2 className="text-[14px] font-semibold text-[#3F3F46]">
                        {title}
                    </h2>
                    <h4 className="text-[#71717A] text-[14px]">
                        {product.title}
                    </h4>
                    <div className="bg-[#F4F4F5] font-semibold text-[12px] w-fit py-1 px-[12px] rounded-[4px]">
                        Qty: {product.quantity}
                    </div>
                    <p className="font-semibold text-[12px] text-[#3F3F46]">
                        &#8377;
                        {product.price}
                    </p>
                </div>
            </div>
            <div>
                <Button
                    style={{ color: brandInfo?.theme["--primary"] }}
                    className="uppercase font-semibold text-[12px] border-none"
                    variant={'link'}
                >
                    Remove
                </Button>
            </div>
        </div>
    );
};
export default Product;
