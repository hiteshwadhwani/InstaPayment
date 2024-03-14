"use client";

import { useBrandInfo } from "@/hooks/brandinfo-hook"
import { useState } from "react";
import { cn } from "@/lib/utilts";
import CardPayment from "./paymet/card-payment";
import UpiPayment from "./paymet/upi-payment";
import CodPayment from "./paymet/cod-payment";

enum PaymentOptions {
    UPI =  "Bhim UPI",
    CARDS = "Credit/debit card",
    COD = "Cash on Delivery",
}

const Options = ({
    value,
    setValue,
}: {
    value: PaymentOptions;
    setValue: (value: PaymentOptions) => void;
}) => {
    const data = useBrandInfo();
    return (
        <div className="w-full md:w-[200px] bg-[#FBFBFB] border-b border-[#F4F4F5]">
            {Object.values(PaymentOptions).map((payment, idx) => (
                <div
                    key={idx}
                    className={cn(
                        "w-full py-[14px] px-[24px] hover:cursor-pointer font-semibold text-[12px]"
                    )}
                    style={{
                        color:
                            payment === value
                                ? data?.theme["--primary"]
                                : undefined,
                        backgroundColor:
                            payment === value ? "white" : undefined,
                        borderLeft: payment === value ? "solid" : undefined,
                        borderColor:
                            payment === value
                                ? data?.theme["--primary"]
                                : undefined,
                    }}
                    onClick={() => setValue(payment)}
                >
                    {payment}
                </div>
            ))}
        </div>
    );
};


const paymentsScreens = {
    [PaymentOptions.CARDS]: <CardPayment />,
    [PaymentOptions.COD]: <CodPayment />,
    [PaymentOptions.UPI]: <UpiPayment />,
};

const PaymentScreen = ({ value }: { value: PaymentOptions }) => {
    return paymentsScreens[value];
};

const PaymentGateway = () => {
    const [payment, setPayment] = useState(PaymentOptions.UPI);
    return (
        <div className="border border-[#F4F4F5] flex flex-col min-h-[400px] rounded-[8px]">
            <div className="uppercase font-semibold text-[12px] py-[20px] px-[24px] border-b border-[#F4F4F5]">
                Choose Payment Method
            </div>
            <div className="flex flex-col md:flex-row h-full">
                <Options value={payment} setValue={setPayment} />
                <div className="flex-1">
                    <PaymentScreen value={payment} />
                </div>
            </div>
        </div>
    );
};
export default PaymentGateway;
