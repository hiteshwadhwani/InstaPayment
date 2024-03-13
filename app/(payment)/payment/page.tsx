import Pricing from "@/components/Pricing"
import PaymentGateway from "@/components/payment-gateway"

const Payment = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-[80%] mx-auto my-8 space-y-4 md:space-y-0 md:space-x-4">
            <PaymentGateway />
            <Pricing />
        </div>
    )
}

export default Payment