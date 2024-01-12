import React from 'react';
import Items from '../components/Items';
import { categories } from '../utils/category';
import '../assets/news.css';
import { useNews } from '../context/NewsContext';

const Home = () => {
  const { data, fetchData } = useNews();
  return (
    <div>
      <h2 className="headlines">Top News Headlines</h2>
        <div className="category-button">
          {categories.map((category) => (
          <button key={category}  onClick={()=>fetchData(category)}>{category}</button>
        ))}
        </div>
        
        <div className="row row-cols-1 row-cols-md-3 row-eq-height">
        {data.map((article) => {
          return (
            <div className="col-sm-4  d-flex align-items-stretch" key={article.id}>
            <Items
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
              publishedAt={article.publishedAt}
              author={article.author}
              source={article.source.name}z
            />
            </div>
          );
        })}
        </div>
    </div>
  )
}

export default Home