import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DarkmodeProvider } from "@/providers/darkmode-provider";
import { BrandInfoContextProvider } from "@/providers/brandinfo-provider";
import { OrderDetailsProvider } from "@/providers/orderdetails-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "InstaPayment",
    description: "InstaPayment",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                    <DarkmodeProvider>
                        <OrderDetailsProvider>
                            <BrandInfoContextProvider>
                                {children}
                            </BrandInfoContextProvider>
                        </OrderDetailsProvider>
                    </DarkmodeProvider>
            </body>
        </html>
    );
}
