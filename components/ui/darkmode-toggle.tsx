"use client";

import { useEffect, useState } from "react";
import { Button } from "./button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import Loading2 from "./loading2";

const themeIcon = {
    dark: <Moon className="h-4 w-4" />,
    light: <Sun className="h-4 w-4" />,
};

const DarkmodeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    const toggle = () => {
        if(resolvedTheme === 'dark'){
            setTheme("light")
        }
        else{
            setTheme("dark")
        }
    }

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null

    return <Button size={'icon'} onClick={(() => toggle())}>{resolvedTheme && themeIcon[resolvedTheme as "dark" | "light"]}</Button>;
};
export default DarkmodeToggle;
