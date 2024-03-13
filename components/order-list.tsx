import OrderListClient from "./orderlist-client";
import Product from "./ui/product";
import { redirect } from 'next/navigation'

const getOrderDetails = async () => {
    const response = await fetch(
        "https://groww-intern-assignment.vercel.app/v1/api/order-details",
    );
    const data = await response.json();
    return data;
};

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

export const revalidate = false

const OrderList = async () => {
    const orderDetails: OrderDetails = await getOrderDetails();
    if(orderDetails.products.length === 0){
        redirect("/empty-cart")
    }

    return (
        <OrderListClient orderDetails={orderDetails} />
    );
};
export default OrderList;
