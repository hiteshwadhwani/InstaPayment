"use client";

import { useBrandInfo } from "@/providers/brandinfo-provider";
import Image from "next/image";
import Loading2 from "./loading2";

const Logo = () => {
    const data = useBrandInfo();
    if (!data) {
        return  <Loading2 />;
    }
    return (
        <div className="h-[40px] gap-x-3 flex flex-row min-w-[108px] items-center">
            <div className="relative h-full w-full">
                <Image
                    src={data.merchantLogo}
                    alt="merchant logo"
                    objectFit="contain"
                    layout="fill"
                />
            </div>
            <h2 className="font-semibold text-[14px] dark:text-white">
                {data.merchantName}
            </h2>
        </div>
    );
};
export default Logo;
