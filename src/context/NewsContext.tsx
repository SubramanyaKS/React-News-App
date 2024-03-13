import React, { useState, useContext, createContext, useEffect } from 'react';
import axios from 'axios';
import '../assets/news.css';

interface Props {
  children: React.ReactNode;
}

// Define types
interface Article {
  // Define the properties of an article
  // Adjust these according to the actual structure of the data
  // For example, if you're using TypeScript with Axios, AxiosResponse<Article[]> might be more appropriate
  // This is just an example based on the existing code
  // You can adjust the types based on the actual data structure
  title: string;
  description: string;
  url: string;
  // Add more properties as needed
}
interface NewsApiResponse {
  articles: Article[];
  // Add more properties as needed
}


interface NewsContextType {
  data: Article[];
  fetchData: (category: string) => void;
  error:String;
}

// Create a context for managing news data
const NewsContext = createContext<NewsContextType | undefined>(undefined);

// Create a custom hook to interact with the NewsContext
const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
};

// Create a NewsProvider component to wrap your app with the NewsContext
const NewsProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<Article[]>([]);
  const [error,setError] = useState<String>("");

  const fetchData = (category: string) => {
    let url = `https://newsapi.org/v2/top-headlines?q=${category}&apiKey=${import.meta.env.VITE_APP_API_KEY}`;
    if (category === 'General') {
      url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${import.meta.env.VITE_APP_API_KEY}`;
    }
    axios
      .get<NewsApiResponse>(url)
      .then((res) => setData(res.data.articles))
      .catch((error) => {
        console.log(error);
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

export { NewsProvider, useNews };
