import Confirmation from "@/components/confirmation";
import Orders from "@/components/ui/orders";

const data = {
    success: {
        imagePath: "/gif/success.gif",
        heading: "Your order has been placed successfully!",
        subheading: "Thank you for shopping with us.",
        buttonText: "Back",
        className: "h-[40vh]"
    },
    fail: {
        imagePath: "/gif/fail.gif",
        heading: "Payment failed!",
        subheading: "Money will get refunded in case amount is deducted  ",
        buttonText: "Back",
        className: "h-[60vh]"
    },
};

const ConfirmationPage = ({
    searchParams,
}: {
    searchParams: {
        status: "success" | "fail";
    };
}) => {
    const status = searchParams.status;
    const confirmationProps = data[status];

    return (
        <>
            <Confirmation {...confirmationProps} />
            {status === "success" && (
                <div>
                    <Orders heading="Items selected" page="confirmation" />
                </div>
            )}
        </>
    );
};
export default ConfirmationPage;
