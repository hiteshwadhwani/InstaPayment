"use client";

import { useBrandInfo } from "@/hooks/brandinfo-hook";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { getRandomValue } from "@/lib/utilts";
import { OrderStatus } from "@/types";
import { useTheme } from "next-themes";

type CardInfo = {
    cardNumber: string;
    nameOnCard: string;
    validThru: string;
    cvv: string;
};

const CardPayment = ({ disabled }: { disabled?: boolean }) => {
    const router = useRouter();
    const brandInfo = useBrandInfo();
    const { theme } = useTheme();
    const randomStatus = getRandomValue(OrderStatus);
    const [errors, setErrors] = useState<Partial<CardInfo>>({}); // Partial for optional error types
    const [formData, setFormData] = useState<CardInfo>({
        cardNumber: "",
        nameOnCard: "",
        validThru: "",
        cvv: "",
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const errorsList: string[] = [];
        for (const [Key, value] of Object.entries(errors)) {
            if (value != undefined) {
                errorsList.push(value);
            }
        }
        if (errorsList.length > 0) {
            console.log(errorsList);
        } else {
            router.push(`/confirmation?status=${randomStatus}`);
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

    const validateField = (
        fieldName: string,
        value: string
    ): string | undefined => {
        switch (fieldName) {
            case "cardNumber":
                return value.length !== 16
                    ? "Invalid card number format (16 digits)"
                    : undefined;
            case "nameOnCard":
                return value.trim() === ""
                    ? "Name on card is required"
                    : undefined;
            case "validThru":
                return value.length !== 5 || !value.match(/^\d{2}\/\d{2}$/)
                    ? "Invalid valid thru format (MM/YY)"
                    : undefined;
            case "cvv":
                return value.length !== 3 || !value.match(/^\d{3}$/)
                    ? "Invalid CVV format (3 digits)"
                    : undefined;
            default:
                return undefined;
        }
    };
    return (
        <div className="py-[14px] px-[24px]">
            <h2
                style={{
                    color:
                        theme === "light"
                            ? brandInfo?.theme["--background"]
                            : brandInfo?.theme["--foreground"],
                }}
                className="mb-4 font-semibold text-[#3F3F46] text-[12px]"
            >
                Pay Using Credit/Debit Card
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    placeholder="Card Number"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className="placeholder:text-[#D4D4D8] placeholder:text-[10px]  border-[#D4D4D8] dark:border-[#494949] shadow-none rounded-[2px]"
                />
                {errors.cardNumber && (
                    <div className="text-xs text-red-600">
                        {errors.cardNumber}
                    </div>
                )}
                <Input
                    placeholder="Name on Card"
                    name="nameOnCard"
                    value={formData.nameOnCard}
                    onChange={handleChange}
                    className="placeholder:text-[#D4D4D8] placeholder:text-[10px] rounded-[2px] border-[#D4D4D8] dark:border-[#494949] shadow-none"
                />
                {errors.nameOnCard && (
                    <div className="text-xs text-red-600">
                        {errors.nameOnCard}
                    </div>
                )}
                <div className="grid grid-cols-3 space-x-4">
                    <div className="col-span-2">
                        <Input
                            placeholder="Valid Thru (MM/YY)"
                            name="validThru"
                            value={formData.validThru}
                            onChange={handleChange}
                            className="placeholder:text-[#D4D4D8] placeholder:text-[10px] rounded-[2px] border-[#D4D4D8] dark:border-[#494949] shadow-none"
                        />
                        {errors.validThru && (
                            <div className="text-xs text-red-600">
                                {errors.validThru}
                            </div>
                        )}
                    </div>
                    <div>
                        <Input
                            placeholder="CVV"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            className="placeholder:text-[#D4D4D8] placeholder:text-[10px] rounded-[2px] border-[#D4D4D8] dark:border-[#494949] shadow-none"
                        />
                        {errors.cvv && (
                            <div className="text-xs text-red-600">
                                {errors.cvv}
                            </div>
                        )}
                    </div>
                </div>

                <Button
                    type="submit"
                    className="uppercase text-white text-[12px] font-bold"
                    style={{ backgroundColor: brandInfo?.theme["--primary"] }}
                    disabled={disabled}
                >
                    Pay now
                </Button>
                {disabled && (
                    <p className="text-xs mt-2 text-rose-600">
                        Disabled by seller
                    </p>
                )}
            </form>
        </div>
    );
};
export default CardPayment;
