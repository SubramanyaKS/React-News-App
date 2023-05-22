import axios from 'axios';
import  { useEffect } from 'react'
import { NewsState } from '../context/NewsContext';

const useFetch = (url) => {
    const {articles,setArticles} = NewsState();
    useEffect(() => {
      const news = async () => {
        axios
          .get(url)
          .then((response) => {
            setArticles(response.data.articles);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      news();
     // console.log("News",news());
    }, [url]);
    return {articles};
}

export default useFetch