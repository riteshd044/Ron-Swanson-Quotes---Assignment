// src/components/QuoteCard.js
import React from 'react';

const QuoteCard = ({ quote, saveQuote }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-lg mb-6">
      <p className="text-xl italic mb-4">"{quote}"</p>
      <button
        className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
        onClick={saveQuote}
      >
        Save Quote
      </button>
    </div>
  );
};

export default QuoteCard;
