import Pricing from "@/components/Pricing";
import Coupon from "@/components/coupons-box";
import AddressBox from "@/components/deliver-box";
import OrderList from "@/components/order-list";
import PlaceorderButton from "@/components/placeorder";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

const Loading = () => {
    return <div>loading</div>;
};

const CheckoutPage = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-[80%] mx-auto my-8 space-y-4 md:space-y-0 md:space-x-4">
                <Suspense fallback={<Loading />}>
                    <OrderList />
                </Suspense>
                <div className="space-y-3">
                    <AddressBox />
                    <Coupon />
                    <Pricing />
                    <PlaceorderButton />
                </div>
            </div>
        </div>
    );
};
export default CheckoutPage;
