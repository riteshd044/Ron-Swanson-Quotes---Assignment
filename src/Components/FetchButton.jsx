// src/components/FetchButton.js
import React from 'react';

const FetchButton = ({ fetchQuote }) => {
  return (
    <button
      className="mb-6 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
      onClick={fetchQuote}
    >
      Fetch New Quote
    </button>
  );
};

export default FetchButton;
