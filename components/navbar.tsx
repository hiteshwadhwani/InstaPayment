"use client";

import Logo from "./ui/logo";
import ProgressBar from "./progress-bar";
import DarkmodeToggle from "./ui/darkmode-toggle";
import { useBrandInfo } from "@/hooks/brandinfo-hook";
import { useTheme } from "next-themes";

const Navbar = () => {
    const brandInfo = useBrandInfo()
    const {theme} = useTheme()
    return (
        <div className="w-full p-6 min-h-[100px] justify-center md:justify-between gap-y-3  flex flex-col md:flex-row items-center border-b dark:border-[#494949] border-[#F4F4F5] sticky top-0 bg-white dark:bg-black z-10">
            <Logo />
            <ProgressBar />
            <div className="hidden md:block min-w-[108px]">
                <DarkmodeToggle />
            </div>
        </div>
    );
};
export default Navbar;
