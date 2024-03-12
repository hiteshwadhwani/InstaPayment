"use client";

import { useBrandInfo } from "@/providers/brandinfo-provider";
import Logo from "./ui/logo";
import ProgressBar from "./progress-bar";
import DarkmodeToggle from "./ui/darkmode-toggle";

const Navbar = () => {
    return (
        <div className="w-full p-6 min-h-[100px] justify-center md:justify-between gap-y-3  flex flex-col md:flex-row items-center border-b border-[#F4F4F5] sticky top-0 bg-white dark:bg-black z-10">
            <Logo />
            <ProgressBar />
            <div className="min-w-[108px]">
                <DarkmodeToggle />
            </div>
        </div>
    );
};
export default Navbar;
