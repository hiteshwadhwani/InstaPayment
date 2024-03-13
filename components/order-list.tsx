// import Product from "./ui/product";
"use client";

import { useOrderDetails } from "@/providers/orderdetails-provider";
import { redirect } from "next/navigation";
import Orders from "./ui/orders";

export type ProductType = {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: string;
};

export type OrderDetails = {
    products: ProductType[];
    paymentMethods: string[];
};


const OrderList = () => {
    const { data } = useOrderDetails();
    if (data?.products.length === 0) {
        redirect("/empty-cart");
    }

    return (
        <Orders heading="Items selected" page="checkout" />
    );
};
export default OrderList;
