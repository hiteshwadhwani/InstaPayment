import Confirmation from "@/components/confirmation"

const EmptyCartPage = () => {
    return <Confirmation imagePath="/bag.svg" heading="Your Bag is empty!" subheading="Add some items to proceed" buttonText="Add from watchlist" className="h-[50vh]" />
}
export default EmptyCartPage