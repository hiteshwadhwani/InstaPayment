"use client";

import { useBrandInfo } from "@/hooks/brandinfo-hook";
import { Button } from "./ui/button";
import Loading from "./ui/loading";
import { useTheme } from "next-themes";

const address = {
    name: "Hitesh Wadhwani",
    address: "B-77 FIG Colony, Indore, Madhya Pradesh, 452011",
};

type AddressBoxProps = {
    page: "checkout" | "confirmation";
};

const AddressBox = ({ page }: AddressBoxProps) => {
    const brandInfo = useBrandInfo();
    const { theme } = useTheme();
    if (!brandInfo) {
        return <Loading />;
    }
    return (
        <div className="h-[124px] p-[24px] flex flex-row justify-between border border-[#F4F4F5] dark:border-[#494949] rounded-[8px]">
            <div className="flex flex-col justify-between">
                <div>
                    <h1
                        style={{
                            color:
                                theme === "light"
                                    ? brandInfo?.theme["--background"]
                                    : brandInfo?.theme["--foreground"],
                        }}
                        className="uppercase text-[12px] text-[#3F3F46] font-semibold"
                    >
                        deliver to
                    </h1>
                </div>
                <div>
                    <p className="text-[12px] text-[#71717A]">{address.name}</p>
                    <p className="text-[12px] text-[#71717A]">
                        {address.address}
                    </p>
                </div>
            </div>
            {page === "checkout" && (
                <Button
                    style={{ color: brandInfo.theme["--primary"] }}
                    className="uppercase font-semibold text-[12px] border-none h-full"
                    variant={"link"}
                >
                    Change
                </Button>
            )}
        </div>
    );
};

export default AddressBox;
