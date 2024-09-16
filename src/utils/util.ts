import { categories } from "./category";

export const handleGitHubClick = () => {
    // Navigate to GitHub
    window.open('https://github.com/SubramanyaKS/React-News-App', '_blank');
};

export const getURL=(category:string)=>{
    let url = `https://newsapi.org/v2/top-headlines?q=${category}&apiKey=${import.meta.env.VITE_APP_API_KEY}`;
    if (category === 'General') {
        url = `https://newsapi.org/v2/top-headlines?q=india&apiKey=${import.meta.env.VITE_APP_API_KEY}`;
    }
    return url;
}