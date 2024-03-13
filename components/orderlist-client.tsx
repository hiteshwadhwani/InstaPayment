'use client'

import { useOrderDetails } from "@/hooks/orderdetails-hook";
import { OrderDetails } from "./order-list";
import Product from "./ui/product";
import { useEffect } from "react";

type OrderListClientProps = {
    orderDetails: OrderDetails
}

const OrderListClient = ({orderDetails}: OrderListClientProps) => {
    const {data, setData} = useOrderDetails()
    
    useEffect(() => {
        setData(orderDetails)
    }, [orderDetails, setData])
    
    return (
        <div className="w-full border border-[#F4F4F5] p-[24px] rounded-[8px]">
            <h1 className="font-semibold text-[12px] text-[#3F3F46] uppercase">Items selected</h1>
            <div className="">
                {orderDetails.products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
export default OrderListClient