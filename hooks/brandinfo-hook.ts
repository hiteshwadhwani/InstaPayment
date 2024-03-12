import { create } from "zustand";

export type BrandInfo = {
    merchantName: string;
    merchantLogo: string;
    theme: {
        "--background": string;
        "--foreground": string;
        "--primary": string;
        "--primary-foreground": string;
    };
};

type BrandInfoStore = {
    data: BrandInfo | null;
    loading: boolean,
    fetchData: () => void;
};

export const useBrandInfoStore = create<BrandInfoStore>((set) => ({
    data: null,
    loading: true,
    fetchData: async () => {
        const response = await fetch("https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata", {cache: "force-cache"});
        const data: BrandInfo = await response.json();
        set({ data: data, loading: false });
    },
}));
