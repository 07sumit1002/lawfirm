import React from "react";
import { motion } from "framer-motion";

/*
  Aggarwal Legal Firm ▸ Privacy Policy Component
  ------------------------------------------------
  • Milligan‑Pusateri theme colours (deep navy / orange)
  • Montserrat font family (assumed globally)          
  • Simple fade‑in animation for hero + content
  • Breaks long policy into readable <p> blocks
  • Last‑updated date shown at top‑right of card
*/

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = "June 18, 2025";

  return (
    <div className="min-h-screen bg-gray-100 font-mont text-justify overflow-x-hidden">
      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-[#2B526E] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/4380787/pexels-photo-4380787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-lg"
          >
            Privacy Policy
          </motion.h1>
        </div>
      </section>

      {/* Policy Card */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-lg shadow-xl p-6 md:p-8 space-y-4"
        >
          <p className="text-sm text-right text-gray-500 mb-2">
            Last Updated: {lastUpdated}
          </p>

          <p>
            Aggarwal Legal Firm (<span className="italic">“Aggarwal”, “we”, “our”</span>) is
            committed to protecting your privacy. This Privacy Policy
            (<span className="italic">“Policy”</span>) explains how we collect, use, share and
            safeguard information obtained through <a href="https://www.aggrawallegalfirm.com" className="text-[#EC9706] underline">www.aggrawallegalfirm.com</a>
            and any associated mobile applications (collectively, the
            <span className="italic">“Website”</span>).
          </p>

          <p>
            By accessing the Website, you acknowledge that you have read and
            understood this Policy and agree to be bound by it. This Policy is
            provided in compliance with the Information Technology Act 2000 and
            the rules framed thereunder, as amended (<span className="italic">“IT Act”</span>).
          </p>

          <h2 className="text-xl font-semibold text-[#2B526E] mt-6">1. Information We Collect</h2>
          <p>
            During your use of the Website, we may collect various categories of
            personal information (<span className="italic">“Personal Information”</span>), including
            but not limited to your name, contact details, professional
            information, payment details, login credentials, publicly available
            data, health or dietary preferences (when voluntarily provided for
            events), and any information you submit in connection with
            applications or enquiries.
          </p>

          <h2 className="text-xl font-semibold text-[#2B526E] mt-6">2. How We Use Personal Information</h2>
          <p>
            We use your Personal Information only for purposes permitted by
            law, such as providing legal services, managing our client
            relationship, complying with regulatory obligations, securing our
            systems, improving our services, and communicating updates or
            marketing material where you have consented.
          </p>

          <h2 className="text-xl font-semibold text-[#2B526E] mt-6">3. Legal Grounds for Processing</h2>
          <p>
            Our processing bases include performance of a contract, compliance
            with legal obligations, protection of legitimate interests, and, in
            specific cases, your explicit consent.
          </p>

          <h2 className="text-xl font-semibold text-[#2B526E] mt-6">4. Sharing of Information</h2>
          <p>
            Aggarwal may share your Personal Information with affiliated
            entities, service providers, courts, regulators, or other parties
            where required for the above purposes, subject to appropriate
            confidentiality and security measures.
          </p>

          <h2 className="text-xl font-semibold text-[#2B526E] mt-6">5. Security Measures</h2>
          <p>
            We implement reasonable technical and organisational safeguards, in
            line with the IT Act and the Information Technology (Reasonable
            Security Practices and Procedures and Sensitive Personal Data or
            Information) Rules 2011, to protect your Personal Information from
            unauthorised access, disclosure, alteration or destruction.
          </p>

          <h2 className="text-xl font-semibold text-[#2B526E] mt-6">6. International Transfers</h2>
          <p>
            Your Personal Information may be stored or processed outside India
            under contractual safeguards that ensure compliance with applicable
            data‑protection laws.
          </p>

          <h2 className="text-xl font-semibold text-[#2B526E] mt-6">7. Your Rights</h2>
          <p>
            Subject to applicable law, you may request access to, correction of,
            or deletion of your Personal Information, or withdraw consent to
            certain processing, by emailing <a href="mailto:privacy@aggrawallegalfirm.com" className="text-[#EC9706] underline">privacy@aggrawallegalfirm.com</a>.
            Withdrawal of consent operates prospectively and may impact the
            services we can provide.
          </p>

          <h2 className="text-xl font-semibold text-[#2B526E] mt-6">8. Retention</h2>
          <p>
            We retain Personal Information only for as long as necessary to
            fulfil the purposes outlined in this Policy or as required by law.
          </p>

          <h2 className="text-xl font-semibold text-[#2B526E] mt-6">9. Modifications to This Policy</h2>
          <p>
            Aggarwal Legal Firm may update this Policy from time to time. Any
            significant changes will be posted on the Website. Your continued
            use of the Website after such changes signifies acceptance.
          </p>

          <h2 className="text-xl font-semibold text-[#2B526E] mt-6">10. Contact Us</h2>
          <p>
            For any questions or concerns regarding this Policy or our privacy
            practices, please email us at <a href="mailto:privacy@aggrawallegalfirm.com" className="text-[#EC9706] underline">privacy@aggrawallegalfirm.com</a> or write to
            Aggarwal Legal Firm, Near District & Sessions Court, Kurukshetra,
            Haryana 136118, India.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
