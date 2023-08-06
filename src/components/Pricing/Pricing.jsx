import CustomersSay from "./CustomersSay/CustomersSay";
import DifferentPricing from "./DifferentPricing/DifferentPricing";
import PricingBanner from "./PricingBanner/PricingBanner";
import PricingPlans from "./PricingPlans/PricingPlans";
import ProgressBar from "./ProgressBar/ProgressBar";
import PurchaseCard from "./PurchaseCard/PurchaseCard";
import WhyWeDoOffer from "./WhyWeDoOffer/WhyWeDoOffer";

const Pricing = () => {
    return (
        <div>
            <PricingBanner />
            <ProgressBar />
            <DifferentPricing />
            <PricingPlans />
            <WhyWeDoOffer />
            <PurchaseCard />
            <CustomersSay />
        </div>
    );
};

export default Pricing;