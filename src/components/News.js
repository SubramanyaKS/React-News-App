import { useEffect } from "react";
import axios from "axios";
import Items from "../components/Items";
import { NewsState } from "../context/NewsContext";
import '../assets/news.css';
const News = () => {
  // const [articles, setArticles] = useState([]);
  const {articles,setArticles} = NewsState();

  useEffect(() => {
    const news = async () => {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}`
        )
        .then((response) => {
          setArticles(response.data.articles);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    news();
   // console.log("News",news());
  }, []);

  return (
    <div className="home">
      <h1 className="headlines">Top Headlines</h1>
      <div className="row row-cols-1 row-cols-md-2 row-eq-height" >
        {articles.map((article) => {
          return (
            <div className="col mb-4  d-flex align-items-stretch" key={article.id}>
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
  );
  //}
};
export default News;
