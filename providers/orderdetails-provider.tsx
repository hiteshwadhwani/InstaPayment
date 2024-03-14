"use client";

import { useOrderDetailsStore, OrderDetailsStore } from "@/hooks/orderdetails-hook";
import React, { createContext, useContext, useEffect } from "react";
import { OrderDetails } from "@/hooks/orderdetails-hook";

export const OrderDetailsContext = createContext<OrderDetails | null>(null);

export interface Props {
    [propName: string]: any;
}

export const OrderDetailsProvider = (props: Props) => {
    const { data, fetchData } = useOrderDetailsStore();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const value = {
        data,
        fetchData
    }

    return <OrderDetailsContext.Provider value={data} {...props} />;
};
