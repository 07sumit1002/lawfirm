import React from 'react';

const Disclaimer = ({ onAgree }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-6">
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-lg sm:text-xl font-bold mb-4">Disclaimer</h2>
        <p className="text-sm text-gray-700 mb-4">
          As per The Bar Council of India Rules and The Advocates Act, 1961, an advocate cannot approach his/her client or advertise or promote his profession by way of advertisements or solicitation. Thus, this website has not been created to approach or solicit our client or advertise our firm but to provide some necessary information about our firm and services to our existing clients.
        </p>
        <p className="text-sm text-gray-700 mb-4">
          Any user of this website is warned that the contents stated herein are not guaranteed to be accurate, up-to-date or complete. Century Law Firm disclaims all responsibilities and liabilities for interpretation or use of information contained on this website nor does it offer any warranty expressed or implied. The information provided under this website is solely available at your request for informational purposes only, should not be interpreted as soliciting or advertisement.
        </p>
        <p className="text-sm text-gray-700 mb-4">
          The contents of this website shall not be considered as Legal Advice as the contents thereof is not exhaustive. It is only introductory. In cases where the user has any legal issues, he/she in all cases must seek independent legal advice. We are not liable for any consequence of any action taken by the user relying on material/information provided under this website. The viewer acknowledges that he or she has read and understood the disclaimer as provided hereinabove.
        </p>
        <div className="flex justify-end">
          <button
            onClick={onAgree}
            className="bg-navy-800 text-white px-4 py-2 rounded hover:bg-navy-900 transition duration-300"
          >
            Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
