// src/components/SavedQuotes.js
import React from 'react';

const SavedQuotes = ({ savedQuotes }) => {
  return (
    <div className="w-full max-w-xl mt-8">
      <h2 className="text-3xl font-semibold text-white mb-4">Saved Quotes</h2>
      {savedQuotes.length > 0 ? (
        savedQuotes.map((q, index) => (
          <div key={index} className="bg-white p-4 mb-4 rounded-lg shadow-lg">
            {q}
          </div>
        ))
      ) : (
        <p className="text-white">No saved quotes.</p>
      )}
    </div>
  );
};

export default SavedQuotes;
