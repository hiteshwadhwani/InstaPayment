'use client'

import Orders from "@/components/ui/orders";
import { useOrderDetails } from "@/providers/orderdetails-provider";

const ConfirmationClient = () => {
    const {data} = useOrderDetails()
    console.log(data)
    if(!data){
        return <div>loading</div>
    }
    return (
        <div>
            <Orders
                heading="Items selected"
                page="confirmation"
            />
        </div>
    );
};
export default ConfirmationClient;
