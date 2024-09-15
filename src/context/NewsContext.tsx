import React, { useState, useContext, createContext, useEffect } from 'react';
import axios from 'axios';
import '../assets/news.css';
import { Article, NewsApiResponse, NewsContextType, Props } from '../utils/types';
import { getURL } from '../utils/util';


// Create a context for managing news data
export const NewsContext = createContext<NewsContextType | undefined>(undefined);

// Create a NewsProvider component to wrap your app with the NewsContext
const NewsProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<Article[]>([]);
  const [error,setError] = useState<String>("");

  const fetchData = (category: string) => {
    let url = getURL(category);
    axios
      .get<NewsApiResponse>(url)
      .then((res) => setData(res.data.articles))
      .catch((error) => {
        setError(error.message)
      });
  };

  useEffect(() => {
    // Fetch data for the "general" category when the component mounts
    fetchData('General');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NewsContext.Provider value={{ data, fetchData,error }}>
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProvider };
