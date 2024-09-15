export type NewsProps = {
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    author: string,
    source: string,
}
export interface Props {
    children: React.ReactNode;
}

// Define types
export interface Article {
    title: string;
    description: string;
    url: string;
}
export interface NewsApiResponse {
    articles: Article[];
    // Add more properties as needed
}
``

export interface NewsContextType {
    data: Article[];
    fetchData: (category: string) => void;
    error: String;
}
export interface ToggleProps {
    children: React.ReactNode;
}
export interface ToggleContextValue {
    toggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}