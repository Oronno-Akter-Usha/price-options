import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {
  const priceOptions = [
    {
      "id": 1,
      "name": "Basic Membership",
      "price": 19.99,
      "features": [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Limited group fitness classes",
        "Locker room access",
        "Discounts on protein shakes at the gym's cafe",
        "Monthly fitness assessment with a trainer"
      ]
    },
    {
      "id": 2,
      "name": "Premimum Membership",
      "price": 39.99,
      "features": [
        "Access to all gym facilities",
        "Unlimited group fitness classes",
        "Locker room access with amenities",
        "Access to sauna and steam room",
        "Discounts on sports nutrition supplements",
        "Free guest passes for friends and family (limited per month)"
      ]
    },
    {
      "id": 3,
      "name": "Platinum Membership",
      "price": 59.99,
      "features": [
        "All features of Silver Membership",
        "Priority booking for group fitness classes",
        "Complimentary towel service",
        "Access to exclusive member events",
        "Free access to specialty fitness workshops",
        "Discounts on merchandise from gym's store"
      ]
    },
    // {
    //   "id": 4,
    //   "name": "Platinum Membership",
    //   "price": 79.99,
    //   "features": [
    //     "All features of Gold Membership",
    //     "Personal training session included per month",
    //     "Unlimited access to all specialty fitness classes",
    //     "Priority access to gym equipment during peak hours",
    //     "Discounts on massage therapy sessions",
    //     "Complimentary body composition analysis"
    //   ]
    // }
  ]


  return (
    <div className="mt-12">
      <h2 className="text-5xl">Best Prices in the town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {
          priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
        }
      </div>
    </div>
  );
};

export default PriceOptions;