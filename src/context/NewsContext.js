import { createContext, useContext, useState } from "react";

// Create a context object for the News state
const News = createContext(null);

// Custom hook to access the News state
export const NewsState = () => {
    return useContext(News);
};

// NewsContext component
 const NewsContext = ({children})=>{

    // Define state for articles and setArticles using useState hook
    const [articles, setArticles] = useState([]);
    // Wrap the children components with News.Provider and provide the state values
    return (
        <News.Provider value={{articles,setArticles}}>
            {children}
        </News.Provider>
    )
}
export default NewsContext;
