import React from "react";
import { ContactHero } from "../../features/contact/ContactHero";
import { ContactForm } from "../../features/contact/ContactForm";

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center pb-20">
      {/* Section 1: Hero / Contact Info Banner */}
      <ContactHero />

      <ContactForm />
    </div>
  );
};
