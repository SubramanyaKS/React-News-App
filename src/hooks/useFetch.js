import axios from 'axios';
import  { useEffect } from 'react'
import { NewsState } from '../context/NewsContext';

const useFetch = (url) => {
    const {articles,setArticles} = NewsState();
    useEffect(() => {
      // Function to fetch news data
      const fetchNews = async () => {
        // Make an HTTP GET request to the specified URL
        axios
          .get(url)
          .then((response) => {
            // Update the articles state with the fetched data
            setArticles(response.data.articles);
          })
          .catch((error) => {
            // Log any errors to the console
            console.log('Error occurred while fetching news:',error);
          });
      };
      // Call the news function to fetch data when the component mounts or when the URL changes
      fetchNews();
     // Dependency array [url] ensures the effect runs when the URL changes
    }, [url, setArticles]);
     // Return the articles state for the consuming component
    return {articles};
}

export default useFetch