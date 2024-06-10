// src/components/ClearButton.js
import React from 'react';

const ClearButton = ({ clearSavedQuotes }) => {
  return (
    <button
      className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
      onClick={clearSavedQuotes}
    >
      Clear Saved Quotes
    </button>
  );
};

export default ClearButton;
