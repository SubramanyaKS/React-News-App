import React, { useEffect } from 'react'
import { NewsState } from '../context/NewsContext';
import Items from './Items';
import axios from 'axios';
import '../assets/news.css'
const AllNews = (props) => {
    const {articles, setArticles} = NewsState();
    useEffect(()=>{
        const news = async () => {
            axios
              .get(
                `https://newsapi.org/v2/top-headlines?q=${props.name}&apiKey=${process.env.REACT_APP_API_KEY}`
              )
              .then((response) => {
                setArticles(response.data.articles);
              })
              .catch((error) => {
                console.log(error);
              });
          };
          news();

    },[])
  return (
      
    <div className="container-fluid">
        <h1 className="headlines">Top {props.name} News Headlines</h1>
    <div className="row row-cols-1 row-cols-md-2 row-eq-height" >
        {articles.map((article) => {
          return (
            <div className="col mb-4  d-flex align-items-stretch">
            <Items
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
              publishedAt={article.publishedAt}
              author={article.author}
              source={article.source.name}
            />
            </div>
          );
          
        })}
      </div>
      </div>

  )
}

export default AllNews;