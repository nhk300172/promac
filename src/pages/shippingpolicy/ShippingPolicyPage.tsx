import React from "react";
import { ShippingPolicyHero } from "../../features/policies/shippingpolicy/ShippingPolicyHero";
import { ShippingPolicyContent } from "../../features/policies/shippingpolicy/ShippingPolicyContent";

export const ShippingPolicyPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white pb-20">
      <ShippingPolicyHero />
      <ShippingPolicyContent />
    </div>
  );
};
