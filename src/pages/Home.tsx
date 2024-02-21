import React, { useContext } from 'react';
import Items from '../components/Items';
import { categories } from '../utils/category';
import '../assets/news.css';
import { useNews } from '../context/NewsContext';
import { ToggleContext } from '../context/ToggleContext';

const Home: React.FC = () => {
  const { data, fetchData,error } = useNews();
  const {toggle} = useContext(ToggleContext);
  // const { toggle, isToggled } = useContext(ToggleContext);

  return (
    <div className={toggle?'background-dark':'background-light'}>
      <h2 className={toggle?"headlines-dark":"headlines"}>Top News Headlines</h2>
      <div className="category-button">
        {categories.map((category: string) => (
          <button key={category} onClick={() => fetchData(category)}>
            {category}
          </button>
        ))}
      </div>
      {error.length>0?<h2 className='text-center text-danger'>{error}</h2>:

      <div className="row row-cols-1 row-cols-md-3 row-eq-height">
        {data.map((article: any) => { // You may need to replace 'any' with the actual type of 'article'
          return (
            <div className="col-sm-4 d-flex align-items-stretch" key={article.id}>
              <Items
                title={article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage}
                publishedAt={article.publishedAt}
                author={article.author}
                source={article.source.name} // Typo corrected from 'source={article.source.name}z' to 'source={article.source.name}'
              />
            </div>
          );
        })}
      </div>}
    </div>
  );
};

export default Home;