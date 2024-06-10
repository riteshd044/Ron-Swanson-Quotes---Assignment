// src/hooks/useQuotes.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useQuotes = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
    setSavedQuotes(storedQuotes);
  }, []);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching quote:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveQuote = () => {
    if (quote && !savedQuotes.includes(quote)) {
      const newSavedQuotes = [...savedQuotes, quote];
      setSavedQuotes(newSavedQuotes);
      localStorage.setItem('savedQuotes', JSON.stringify(newSavedQuotes));
    }
  };

  const clearSavedQuotes = () => {
    setSavedQuotes([]);
    localStorage.removeItem('savedQuotes');
  };

  return {
    quote,
    savedQuotes,
    fetchQuote,
    saveQuote,
    clearSavedQuotes,
    loading,
  };
};

export default useQuotes;
