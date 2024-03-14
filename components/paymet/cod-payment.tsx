"use client";

import { useBrandInfo } from "@/hooks/brandinfo-hook";
import { OrderStatus } from "@/types";
import { getRandomValue } from "@/lib/utilts";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

const CodPayment = ({ disabled }: { disabled?: boolean }) => {
    const router = useRouter();
    const brandInfo = useBrandInfo();
    const { theme } = useTheme();
    const randomStatus = getRandomValue(OrderStatus);

    return (
        <div className="py-[14px] px-[24px]">
            <h2
                style={{
                    color:
                        theme === "light"
                            ? brandInfo?.theme["--background"]
                            : brandInfo?.theme["--foreground"],
                }}
                className="mb-4 font-semibold text-[#3F3F46] text-[12px]"
            >
                You can pay via Cash/UPI on delivery
            </h2>
            <Button
                type="submit"
                className="uppercase text-white text-[12px] font-bold"
                style={{ backgroundColor: brandInfo?.theme["--primary"] }}
                onClick={() =>
                    router.push(`/confirmation?status=${randomStatus}`)
                }
                disabled={disabled}
            >
                Pay now
            </Button>
            {disabled && (
                <p className="text-xs mt-2 text-rose-600">Disabled by seller</p>
            )}
        </div>
    );
};
export default CodPayment;
