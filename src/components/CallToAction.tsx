import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start gap-10">
          {/* Left: Headline, description, map */}
          <div className="flex-1 min-w-0">
            <h2 className="text-4xl font-bold font-mont text-navy-900 mb-4">
              Got Legal Needs? <span className="italic font-normal">Tell Us About Them!</span>
            </h2>
            <p className="text-lg text-navy-800 mb-2 font-work">
              At Aggarwal Legal Firm, we are here to help you with all your legal needs.
            </p>
            <p className="text-base text-navy-700 mb-6 font-work">
              We understand that legal issues can be complex and overwhelming, but you don't have to navigate them alone!
            </p>
            <div className="rounded-lg overflow-hidden shadow-lg h-72">
              <iframe
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Aggarwal Legal Firm Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.838448648001!2d76.8679528!3d29.9690056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU4JzA4LjQiTiA3NsKwNTInMDQuNiJF!5e0!3m2!1sen!2sin!4v1717146351234!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
          {/* Right: CTA Box */}
          <div className="flex-1 min-w-0 flex flex-col items-center md:items-start">
            <div
              className="w-full rounded-2xl p-8 shadow-lg flex flex-col items-center md:items-start"
              style={{
                backgroundColor: "white",
                '--tw-bg-opacity': 1,
              }}
            >
              <h3 className="text-2xl font-bold text-deepRoyal mb-2 font-work">
                Contact Aggarwal Legal Firm Today!
              </h3>
              <p className="text-deepRoyal mb-6 font-work">
                Discuss your legal needs with us.
              </p>
              <Link
                to="/contact"
                className="bg-white text-deepRoyal font-work font-semibold px-8 py-3 rounded-full shadow hover:bg-royal-blue-400 hover:text-white transition-all text-lg mb-5 text-center"
              >
                Free Consultation
              </Link>
              <div className="flex items-center gap-3 mt-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-royal-blue-400">
                  {/* Phone SVG */}
                  <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                    <path
                      d="M16.5 14.5l-2-2a1 1 0 0 0-1.32-.08l-1.2.96a8.5 8.5 0 0 1-4.36-4.36l.96-1.2a1 1 0 0 0-.08-1.32l-2-2A1 1 0 0 0 4 5.5v2A10.5 10.5 0 0 0 14.5 18h2a1 1 0 0 0 .99-1.13z"
                      fill="#fff"
                    />
                  </svg>
                </span>
                <a
                  href="tel:+919876543210"
                  className="text-deepROyal text-lg font-semibold font-work hover:underline"
                >
                  +91 98765 43210
                </a>
              </div>
              <p className="text-xs text-deepRoyal mt-6 opacity-70 font-work">
                * Communication through our website does not establish an attorney-client relationship between you and Aggarwal Legal Firm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
