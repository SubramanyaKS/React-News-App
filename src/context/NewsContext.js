import { createContext, useContext, useState } from "react";

const News = createContext(null);

export const NewsState = () => {
    return useContext(News);
};

 const NewsContext = ({children})=>{
    const [articles, setArticles] = useState([]);

    return (
        <News.Provider value={{articles,setArticles}}>
            {children}
        </News.Provider>
    )
}
export default NewsContext;
