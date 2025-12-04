import React from "react";
import { ReturnPolicyHero } from "../../features/policies/returnpolicy/ReturnPolicyHero";
import { ReturnPolicyContent } from "../../features/policies/returnpolicy/ReturnPolicyContent";

export const ReturnPolicyPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white pb-20">
      <ReturnPolicyHero />
      <ReturnPolicyContent />
    </div>
  );
};
