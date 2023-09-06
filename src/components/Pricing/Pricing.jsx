import StarsCanvas from "@/components/Canvas/Stars.jsx";
import { PriceData } from "@/components/Pricing/PriceConstants.js";
import PriceCard from "@/components/Pricing/PriceCard.jsx";

const Pricing = () => {
  return (
    <>
      <div
        className={
          "flex flex-col items-center justify-center gap-6 pt-20 sm:pt-32 lg:h-full lg:flex-row lg:pt-0"
        }
      >
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
      <StarsCanvas />
    </>
  );
};

export default Pricing;
