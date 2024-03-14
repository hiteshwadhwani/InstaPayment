// import Product from "./ui/product";
"use client";

import { useOrderDetails } from "@/hooks/orderdetails-hook"
import { redirect } from "next/navigation";
import Orders from "./ui/orders";

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
