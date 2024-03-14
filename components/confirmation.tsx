'use client'

import Image from "next/image"
import { Button } from "./ui/button"
import { useBrandInfo } from "@/hooks/brandinfo-hook"
import { cn } from "@/lib/utilts"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"

type ConfirmationProps = {
    className?: string
    imagePath: string,
    heading: string,
    subheading: string
    buttonText: string
}

const Confirmation = ({imagePath, heading, subheading, buttonText, className}: ConfirmationProps) => {
    const brandInfo = useBrandInfo()
    const {theme} = useTheme()
    const router = useRouter()

    return (
        <div className={cn("flex w-full items-center justify-center flex-col space-y-4", className)}>
            <Image unoptimized={true} src={imagePath} alt="bag" width={60} height={60} />
            <div>
                <h2 style={{color: theme === 'light' ? brandInfo?.theme["--background"] : brandInfo?.theme["--foreground"]}} className="text-[16px] text-[#3F3F46] text-center">{heading}</h2>
                <p className="text-[#71717A] text-[16px] text-center mt-1">{subheading}</p>
            </div>
            <Button onClick={() => router.push("/")} style={{color: brandInfo?.theme["--primary"], backgroundColor: `${brandInfo?.theme["--primary"].slice(0, -1)},5%)`}} className="text-[#71717A] dark:border-[#494949] border-none shadow-none rounded-none">
                {buttonText}
            </Button>
        </div>
    )
}
export default Confirmation