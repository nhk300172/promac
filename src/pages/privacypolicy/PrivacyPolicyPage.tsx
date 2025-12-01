import React from "react";
import { PrivacyPolicyHero } from "../../features/policies/privacypolicy/PrivacyPolicyHero";
import { PrivacyPolicyContent } from "../../features/policies/privacypolicy/PrivacyPolicyContent";

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white pb-20">
      <PrivacyPolicyHero />
      <PrivacyPolicyContent />
    </div>
  );
};
