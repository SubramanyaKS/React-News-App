import React, { useState, useContext, createContext, useEffect } from 'react';
import axios from 'axios';
import '../assets/news.css';

// Create a context for managing news data
const NewsContext = createContext();

// Create a custom hook to interact with the NewsContext
const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
};

// Create a NewsProvider component to wrap your app with the NewsContext
const NewProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchData = (category) => {
    let url =`https://newsapi.org/v2/top-headlines?q=${category}&apiKey=${import.meta.env.VITE_APP_API_KEY}`;
    if(category==="General"){
      url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${import.meta.env.VITE_APP_API_KEY}`;
    }
    axios
      .get(url)
      .then((res) => setData(res.data.articles))
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    // Fetch data for the "general" category when the component mounts
    fetchData('General');
  }, []);

  return (
    <NewsContext.Provider value={{ data, fetchData }}>
      {children}
    </NewsContext.Provider>
  );
};

export { NewProvider, useNews };