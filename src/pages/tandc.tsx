import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideIn = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const TandC = () => {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const lastUpdated = "June 17, 2025";

  const introText = (
    <>
      <p className="text-gray-700 mb-4">
        This website is operated by Aggrawal Legal Firm (comprising Aggrawal
        Legal Firm and its affiliates). References to "Aggrawal Legal Firm" are
        to the legal entities that comprise Aggrawal Legal Firm.
      </p>
      <p className="text-gray-700 mb-4">
        The Bar Council of India does not permit advertisement or solicitation
        by advocates in any form or manner.
      </p>
      <p className="text-gray-700 mb-4">
        By accessing this website (www.aggrawallegalfirm.com)... you are deemed
        to accept the following terms and conditions...
      </p>
    </>
  );

  const terms = [
    {
      id: 1,
      title: "Website info only, no advice",
      content:
        "The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement. No material/information provided on this website should be construed as legal advice. Aggrawal Legal Firm shall not be liable for consequences of any action taken by relying on the material/information provided on this website.",
    },
    {
      id: 2,
      title: "Other sites have different terms",
      content:
        "As you browse through this website you may access other websites that are subject to different terms of use. When using these other sites, you will be bound by the terms and conditions posted on those websites.",
    },
    {
      id: 3,
      title: "Terms may change without notice",
      content:
        "Aggrawal Legal Firm may change these terms of use at any time without notice. Any amendment will be effective immediately. You are encouraged to periodically visit this page to review the Terms and Conditions and any changes thereto. Discontinuing use of the Website will not affect the applicability of the Terms and Conditions to your prior uses of the Website.",
    },
    {
      id: 4,
      title: "Information accuracy not guaranteed",
      content:
        'Aggrawal Legal Firm makes no representations about the suitability, reliability, timeliness, comprehensiveness and accuracy of the information, services and other content contained on this website. The content on this website is provided by Aggrawal Legal Firm in good faith on an "as is" basis for general information purposes only and is not intended to constitute or substitute legal or other professional advice. It should be noted that such information can rapidly become out of date. You must make your own assessment of the information and rely on it wholly at your own risk. Aggrawal Legal Firm may, from time to time, change or add to this website without notice. However, we do not undertake to keep this website updated. Aggrawal Legal Firm is not liable to you or anyone else if errors occur in the information on this website or if that information is not up-to-date.',
    },
    {
      id: 5,
      title: "Content subject to specified jurisdiction",
      content:
        "Legal content on this website relates only to the law or laws it is specified to apply to, and that law may be different from your law.",
    },
    {
      id: 6,
      title: "No liability for website damages",
      content:
        "Aggrawal Legal Firm shall not be liable directly or indirectly in contract, tort, equity or otherwise for any damage whatsoever in connection with this website, use of content provided on this website or any other website hyperlinked from the Website, including any direct, indirect, special, incidental or consequential damage (including but not limited to loss of profits, interest, data, business revenue, anticipated savings, business or goodwill).",
    },
    {
      id: 7,
      title: "General disclaimer applies throughout",
      content:
        "This general disclaimer is not restricted or modified by any specific warnings and disclaimers elsewhere on this website.",
    },
    {
      id: 8,
      title: "Content for personal, non‑commercial use",
      content:
        "This website is copyright property of Aggrawal Legal Firm, and all rights are reserved. You are provided with access to it only for your personal and non-commercial use. You may not, in any form or by any means: (i) adapt, reproduce, store, distribute, transmit, print, display, perform, publish or create derivative works from any part of this website; or (ii) commercialise any information, products or services obtained from any part of this website, without our written permission.",
    },
    {
      id: 9,
      title: "All intellectual property rights reserved",
      content:
        "All rights in this website and the content on this website including copyright, design rights, patents, inventions, knowhow, database rights, trade marks, source codes and any other intellectual property rights in any of the foregoing are reserved to Aggrawal Legal Firm and/or their content and technology providers.",
    },
    {
      id: 10,
      title: "Displayed trademarks owned by others",
      content:
        'All trade names, trade marks, service marks and other product and service names and logos (the "Marks") displayed on the website are proprietary to their respective owners and are protected by applicable trade mark and copyright laws. These Marks may be registered or unregistered marks of Aggrawal Legal Firm or others.',
    },
    {
      id: 11,
      title: "No implied license for trademarks",
      content:
        "Nothing contained on the website should be construed as granting any licence or right of use of any other person's or entity's trade mark which is displayed on this website without their express permission.",
    },
    {
      id: 12,
      title: "Do not alter proprietary marks",
      content:
        "You may not remove, change or obscure the Marks or any notices of proprietary rights on any content of this website.",
    },
    {
      id: 13,
      title: "External links provided without endorsement",
      content:
        "This website may contain links to other websites solely for your convenience only and may not remain current or be maintained. Aggrawal Legal Firm does not endorse, recommend or approve of any information, products or services referred to on such linked sites and assumes no responsibility for the contents of any other website to which this website offers links.",
    },
    {
      id: 14,
      title: "Linking requires prior written consent",
      content:
        "You may not link the homepage or any other parts of this website without prior written consent from Aggrawal Legal Firm.",
    },
    {
      id: 15,
      title: "No control over linked sites",
      content:
        "Unless stated otherwise on this website, Aggrawal Legal Firm has: (i) no relationship with the owners or operators of those linked website; and (ii) no control over or rights in those linked website.",
    },
    {
      id: 16,
      title: "Terms incorporate firm privacy policy",
      content:
        "These terms of use incorporate, and should be read together with, the Aggrawal Legal Firm Privacy Policy (available at Privacy Policy)",
    },
    {
      id: 17,
      title: "Consent to firm promotional emails",
      content:
        "If you express interest in products or services through your use of this website, you consent to Aggrawal Legal Firm sending commercial electronic messages (including messages about Aggrawal Legal Firm products and services and the products and services of third parties) to electronic addresses which you have provided to Aggrawal Legal Firm or for which you or your employer (or your employer's related bodies corporate) are the relevant electronic account holder.",
    },
    {
      id: 18,
      title: "Indian law and Kurukshetra jurisdiction",
      content:
        "These terms and conditions and any dispute, controversy, proceedings or claim of whatever nature arising out of or in any way relating to these terms and conditions shall be governed by and construed in accordance with Indian law and the courts of Kurukshetra shall have exclusive jurisdiction to resolve any disputes between us relating to these terms and conditions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-mont text-justify overflow-hidden">
      <section className="pt-32 pb-16 bg-navy-900 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            filter: "blur(2px)",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-300 max-w-xl mx-auto">
              Explore the guidelines that govern your experience with Aggrawal
              Legal Firm.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-lg shadow-xl p-6 md:p-8"
        >
          {/* Last updated info */}
          <p className="text-sm text-right text-gray-500 mb-2">
            Last Updated: {lastUpdated}
          </p>

          {introText}

          {terms.map((term) => {
            const isOpen = openSections.includes(term.id);
            return (
              <motion.div
                key={term.id}
                variants={slideIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  onClick={() => toggleSection(term.id)}
                  aria-expanded={isOpen}
                  aria-controls={`term-${term.id}`}
                  className="w-full text-left py-4 flex justify-between items-center text-lg font-semibold text-navy-900 hover:text-blue-600 transition-colors"
                >
                  <span>
                    {term.id}. {term.title}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`content-${term.id}`}
                      id={`term-${term.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pl-4 pr-2 text-gray-700 text-sm md:text-base"
                    >
                      <div className="py-2">{term.content}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
};

export default TandC;
