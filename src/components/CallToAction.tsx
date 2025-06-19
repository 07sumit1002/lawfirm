import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => (
  <section className="py-16 bg-gray-100 md:px-28">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-start gap-10">
        {/* ───────────────────────── Left column ───────────────────────── */}
        <div className="flex-1">
          <h2
            className="mb-4 text-4xl font-bold text-navy-900 font-mont"
            style={{ fontFamily: 'Playfair-italic' }}
          >
            Got Legal Needs?{' '}
            <span className="italic font-medium">Tell Us About Them!</span>
          </h2>

          <p className="mb-2 text-lg text-navy-800 font-work">
            At Aggarwal Legal Firm, we are here to help you with all your legal
            needs.
          </p>
          <p className="mb-6 text-base text-navy-700 font-work">
            We understand that legal issues can be complex and overwhelming, but
            you don't have to navigate them alone!
          </p>

          <div className="h-72 overflow-hidden rounded-lg shadow-lg">
            <iframe
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Aggarwal Legal Firm Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.838448648001!2d76.8679528!3d29.9690056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU4JzA4LjQiTiA3NsKwNTInMDQuNiJF!5e0!3m2!1sen!2sin!4v1717146351234!5m2!1sen!2sin"
            />
          </div>
        </div>

        {/* ────────────────────── Right column (CTA card) ────────────────────── */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <div className="w-full rounded-2xl p-8 shadow-lg bg-white flex flex-col items-center md:items-start">
            <h3 className="mb-2 text-2xl font-bold text-deepRoyal font-work">
              Contact Aggarwal Legal Firm Today!
            </h3>

            <p className="mb-6 text-deepRoyal font-work">
              Discuss your legal needs with us.
            </p>

            {/* CTA + phone (mobile) */}
            <div className="flex w-full flex-col sm:flex-row sm:justify-start sm:items-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 text-lg font-semibold text-deepRoyal bg-gray-100 rounded-full shadow transition-all hover:bg-deepRoyal hover:text-white font-work text-center"
              >
                Free Consultation
              </Link>

              {/* Phone (small screens) */}
              <a
                href="tel:+919729079252"
                className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold text-deepRoyal rounded-full border border-deepRoyal md:hidden"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 22 22"
                  fill="currentColor"
                  className="text-deepRoyal"
                >
                  <path d="M16.5 14.5l-2-2a1 1 0 0 0-1.32-.08l-1.2.96a8.5 8.5 0 0 1-4.36-4.36l.96-1.2a1 1 0 0 0-.08-1.32l-2-2A1 1 0 0 0 4 5.5v2A10.5 10.5 0 0 0 14.5 18h2a1 1 0 0 0 .99-1.13z" />
                </svg>
                +91&nbsp;97290&nbsp;79252
              </a>

              {/* Disclaimer (shown only on small screens) */}
              <p className="text-xs opacity-70 text-deepRoyal p-2 font-work md:hidden">
                * Communication through our website does not establish an attorney‑client
                relationship between you and Aggarwal Legal Firm.
              </p>
            </div>
          </div>

          {/* Phone (md and up) */}
          <div className="hidden md:flex flex-col gap-2 mt-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-deepRoyal">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="#fff"
                >
                  <path d="M16.5 14.5l-2-2a1 1 0 0 0-1.32-.08l-1.2.96a8.5 8.5 0 0 1-4.36-4.36l.96-1.2a1 1 0 0 0-.08-1.32l-2-2A1 1 0 0 0 4 5.5v2A10.5 10.5 0 0 0 14.5 18h2a1 1 0 0 0 .99-1.13z" />
                </svg>
              </span>
              <a
                href="tel:+919729079252"
                className="text-lg font-semibold text-deepRoyal font-work hover:text-deepRoyal/50"
              >
                +91&nbsp;97290&nbsp;79252
              </a>
            </div>

            {/* Disclaimer (shown on md+ screens) */}
            <p className="text-xs opacity-70 text-deepRoyal p-2 font-work">
              * Communication through our website does not establish an attorney‑client
              relationship between you and Aggarwal Legal Firm.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CallToAction;
