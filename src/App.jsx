// src/App.js
import React from 'react';
import FetchButton from './Components/FetchButton';
import QuoteCard from './Components/QuoteCard';
import SavedQuotes from './Components/SavedQuotes';
import ClearButton from './Components/ClearButton';
import LoadingSpinner from './Components/LoadingSpinner';
import useQuotes from './Hooks/UseQuotes';

const App = () => {
  const { quote, savedQuotes, fetchQuote, saveQuote, clearSavedQuotes, loading } = useQuotes();

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-white mb-8">Ron Swanson Quotes</h1>
      <FetchButton fetchQuote={fetchQuote} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        quote && <QuoteCard quote={quote} saveQuote={saveQuote} />
      )}
      <SavedQuotes savedQuotes={savedQuotes} />
      {savedQuotes.length > 0 && <ClearButton clearSavedQuotes={clearSavedQuotes} />}
    </div>
  );
};

export default App;
