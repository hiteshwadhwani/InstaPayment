import { OrderDetails } from "@/components/order-list";
import { create } from "zustand";

type OrderDetailsStore = {
    data: OrderDetails | null;
    setData: (data: OrderDetails) => void;
};

export const useOrderDetails = create<OrderDetailsStore>((set) => ({
    data: null,
    setData: (data: OrderDetails) => set({ data: data }),
}));
