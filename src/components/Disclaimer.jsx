import React from 'react';

const Disclaimer = ({ onAgree }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-6">
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-lg sm:text-xl font-bold mb-4">Disclaimer</h2>
        <p className="text-sm text-gray-700 mb-4 text-justify">
          As per the Bar Council of India Rules and the Advocates Act, 1961, advocates cannot advertise or solicit clients. This website is intended only to share general information about Aggrawal Legal with those seeking it voluntarily.
        </p>
        <p className="text-sm text-gray-700 mb-4 text-justify">
          The content on this site is for informational purposes only and may not be accurate, complete, or current. Aggrawal Legal is not liable for any reliance placed on this information.
        </p>
        <p className="text-sm text-gray-700 mb-4 text-justify">
          Nothing on this website should be treated as legal advice. For legal issues, please consult a qualified professional. By using this site, you agree to this disclaimer.
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
