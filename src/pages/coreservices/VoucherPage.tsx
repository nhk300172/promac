import React from "react";
import { VoucherHero } from "../../features/coreservices/voucher/VoucherHero";
import { VoucherContent } from "../../features/coreservices/voucher/VoucherContent";
import { VoucherPortfolio } from "../../features/coreservices/voucher/VoucherPortfolio";

export const VoucherPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white pb-20">
      <VoucherHero />
      <VoucherContent />
      <VoucherPortfolio />
    </div>
  );
};
