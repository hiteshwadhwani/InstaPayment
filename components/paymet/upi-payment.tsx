"use client";

import { useBrandInfo } from "@/hooks/brandinfo-hook"
import { OrderStatus } from "@/types";
import { getRandomValue } from "@/lib/utilts";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type UpiInfo = {
    upi_id: string
};

const UpiPayment = () => {
    const router = useRouter();
    const brandInfo = useBrandInfo();
    const randomStatus = getRandomValue(OrderStatus)
    const [errors, setErrors] = useState<Partial<UpiInfo>>({}); // Partial for optional error types
    const [formData, setFormData] = useState<UpiInfo>({
        upi_id: ""
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const errorsList: string[] = [];
        for (const [Key, value] of Object.entries(errors)) {
            if (value != undefined) {
                errorsList.push(value);
            }
        }
        if (errorsList.length > 0 || !formData.upi_id) {
            console.log(errorsList);
        } else {
            router.push(`/confirmation?status=${randomStatus}`);
        }
    };
    const validateField = (
        fieldName: string,
        value: string
    ): string | undefined => {
        switch (fieldName) {
            case "upi_id":
                if(new RegExp("[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}").test(value) === false){
                    return "Invalid UPI Id"
                }
                return undefined
            default:
                return undefined;
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: validateField(name, value),
        })); // Update errors on change
    };

    return (
        <div className="py-[14px] px-[24px]">
            <h2 className="mb-4 font-semibold text-[#3F3F46] text-[12px]">Pay Using Credit/Debit Card</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    placeholder="Enter UPI ID here"
                    name="upi_id"
                    value={formData.upi_id}
                    onChange={handleChange}
                    className="placeholder:text-[#D4D4D8] placeholder:text-[10px] rounded-none border-[#D4D4D8] shadow-none"
                />
                {errors.upi_id && (
                    <div className="text-xs text-red-600">
                        {errors.upi_id}
                    </div>
                )}
                <Button
                    type="submit"
                    className="uppercase text-white text-[12px] font-bold"
                    style={{ backgroundColor: brandInfo?.theme["--primary"] }}
                >
                    Pay now
                </Button>
            </form>
        </div>
    );
};
export default UpiPayment;
