import { cn } from "@/lib/utilts";
import { useBrandInfo } from "@/hooks/brandinfo-hook"
import Image from "next/image";
import { usePathname } from "next/navigation";

enum progress {
    ADDRESS = "Address",
    CHECKOUT = "Checkout",
    PAYMENT = "Payment",
}

const ProgressBar = () => {
    const path = usePathname().split("/");
    const brandInfo = useBrandInfo();
    const progressParam = path[path.length - 1];
    return (
        <div className="flex flex-row gap-x-2">
            <p
                style={{
                    color:
                        progressParam === progress.ADDRESS.toLowerCase()
                            ? brandInfo?.theme["--primary"]
                            : undefined,
                }}
                className={cn(
                    "text-[#71717A]",
                    progressParam === progress.ADDRESS.toLowerCase() &&
                        "font-semibold"
                )}
            >
                {progress.ADDRESS}
            </p>
            <Image src={"/dash.svg"} alt="dash image" height={10} width={50} />
            <p
                style={{
                    color:
                        progressParam === progress.CHECKOUT.toLowerCase()
                            ? brandInfo?.theme["--primary"]
                            : undefined,
                }}
                className={cn(
                    "text-[#71717A]",
                    progressParam === progress.CHECKOUT.toLowerCase() &&
                        "font-semibold"
                )}
            >
                {progress.CHECKOUT}
            </p>
            <Image src={"/dash.svg"} alt="dash image" height={10} width={50} />
            <p
                style={{
                    color:
                        progressParam === progress.PAYMENT.toLowerCase()
                            ? brandInfo?.theme["--primary"]
                            : undefined,
                }}
                className={cn(
                    "text-[#71717A]",
                    progressParam === progress.PAYMENT.toLowerCase() &&
                        "font-semibold"
                )}
            >
                {progress.PAYMENT}
            </p>
        </div>
    );
};
export default ProgressBar;
