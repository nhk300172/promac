import React from "react";
import { ReturnPolicyHero } from "../../features/policies/returnpolicy/ReturnPolicyHero";
import { ReturnPolicyContent } from "../../features/policies/returnpolicy/ReturnPolicyContent";
import { ContactBanner } from "../../components/layout/ContactBanner";

export const ReturnPolicyPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white pb-20">
      <ReturnPolicyHero />
      <ReturnPolicyContent />
      <ContactBanner />
    </div>
  );
};
