import { useEffect, useState } from "react";
import axios from "axios";
import Items from "./Items";
const Sports = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const news = async () => {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?q=sports&apiKey=${process.env.REACT_APP_API_KEY}`
        )
        .then((response) => {
          setArticles(response.data.articles);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    console.log("News",news());
  }, []);

  return (
    <div className="home">
      <h6>Welcome to Sports News</h6>
      <div>
        {articles.map((article) => {
          return (
            <Items
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
              publishedAt={article.publishedAt}
              author={article.author}
              source={article.source.name}
            />
          );
        })}
      </div>
    </div>
  );
  //}
};
export default Sports;
