"use client";

import { BrandInfo, useBrandInfoStore } from "@/hooks/brandinfo-hook";
import React, { createContext, useContext, useEffect } from "react";

export const BrandInfoContext = createContext<BrandInfo | null>(null);

export interface Props {
    [propName: string]: any;
}

export const BrandInfoContextProvider = (props: Props) => {
    const { data, fetchData } = useBrandInfoStore();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return <BrandInfoContext.Provider value={data} {...props} />;
};