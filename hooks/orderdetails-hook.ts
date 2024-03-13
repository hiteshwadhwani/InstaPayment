'use client'

import { OrderDetails } from "@/components/order-list";
import useSWR from "swr";
import { create } from "zustand";

export type OrderDetailsStore = {
    data: OrderDetails | null;
    fetchData: () => void;

    // setData: (data: OrderDetails) => void;
};

export const useOrderDetailsStore = create<OrderDetailsStore>((set) => ({
    data: null,
    fetchData: async () => {
        const response = await fetch("https://groww-intern-assignment.vercel.app/v1/api/order-details", {cache: "force-cache"});
        const data: OrderDetails = await response.json();
        set({ data: data });
    },
    // setData: (data: OrderDetails) => set({ data: data }),
}));
