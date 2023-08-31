import StarsCanvas from "@/components/Canvas/Stars.jsx";
import { PriceData } from "@/components/Pricing/PriceConstants.js";
import PriceCard from "@/components/Pricing/PriceCard.jsx";

const Pricing = () => {
  return (
    <>
      <div className={"h-screen pt-20"}>
        <div className={"flex h-full flex-col items-center justify-center gap-6 lg:flex-row"}>
          {PriceData &&
            PriceData.map((plan, index) => (
              <PriceCard
                key={index}
                title={plan.planName}
                price={plan.planPrice}
                contents={plan.planContent}
                footer={plan.planButtonName}
              />
            ))}
        </div>
      </div>
      <StarsCanvas />
    </>
  );
};

export default Pricing;
