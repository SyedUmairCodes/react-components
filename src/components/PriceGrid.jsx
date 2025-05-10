import { Check } from "lucide-react";

const PricingCard = ({
  planName,
  storage,
  price,
  features,
  cardBaseClasses, // Base classes for the card wrapper
  headerElement, // Element for the top banner (e.g., "BEST VALUE")
}) => {
  return (
    <div
      className={`rounded-lg flex flex-col h-full overflow-hidden shadow-lg ${cardBaseClasses}`}
    >
      {headerElement}

      <div className="p-8 flex flex-col flex-grow">
        <p className="text-white uppercase text-xs font-semibold tracking-wider text-center min-h-[1.5rem] mb-4 flex items-center justify-center">
          {planName}
        </p>

        <h3 className="text-4xl lg:text-5xl font-bold text-white mb-1 text-center">
          {storage}
        </h3>
        <p className="text-white text-sm mb-8 text-center">{price}</p>

        <button className=" text-black hover:bg-white/90 bg-white  hover:text-black transition-colors duration-200 rounded-md py-3 px-6 w-full text-center font-semibold">
          Subscribe
        </button>

        <hr className="border-t border-white my-8" />

        <ul className="space-y-3 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-white">
              {/* Step 2: Use Lucide Check icon */}
              <Check
                size={20}
                className="text-slate-100 mr-2 flex-shrink-0"
                strokeWidth={2.5}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const PriceGrid = () => {
  const pricingInfo = {
    plans: [
      {
        id: "starter",
        planName: "STARTER",
        storage: "100GB",
        price: "$1.99/Month",
        features: ["100 GB of storage", "10 Members", "Community support"],
        isBestValue: false,
      },
      {
        id: "best-value",
        planName: "", // No explicit plan name shown for "BEST VALUE" on card itself
        storage: "500GB",
        price: "$4.99/Month",
        features: [
          "500GB of storage",
          "Priority support",
          "Local and cloud backups",
        ],
        isBestValue: true,
      },
      {
        id: "ultimate",
        planName: "ULTIMATE",
        storage: "10TB",
        price: "$12.99/Month",
        features: [
          "10 TB of storage",
          "Everything in the value pack",
          "SSO + White labelling",
        ],
        isBestValue: false,
      },
    ],
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {pricingInfo.plans.map((plan) => {
            const cardBaseClasses = plan.isBestValue
              ? "bg-black"
              : "bg-neutral-950";

            const headerElement = plan.isBestValue ? (
              <div className="bg-neutral-950 text-center py-2.5">
                <span className="text-white text-xs font-bold uppercase tracking-wider">
                  BEST VALUE
                </span>
              </div>
            ) : null;
            return (
              <PricingCard
                key={plan.id}
                planName={plan.planName}
                storage={plan.storage}
                price={plan.price}
                features={plan.features}
                cardBaseClasses={cardBaseClasses}
                headerElement={headerElement}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PriceGrid;
