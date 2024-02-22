import "../App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image1 from '../assets/news.jpg';
import { ToggleContext } from "../context/ToggleContext";
import { useContext } from "react";

type Props={
  title:string,
  description:string,
  url:string,
  urlToImage:string,
  publishedAt:string,
  author:string,
  source:string,
}

const Items = ({
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  author,
  source,
}:Props) => {
  const {toggle} = useContext(ToggleContext);
  const localDate:string = new Date(publishedAt).toLocaleDateString();

  return (
    <Card className={toggle?"card-dark text-center":"card-light text-center"}>
      <Card.Header className="cheader">{source}</Card.Header>
      <Card.Img
        className="news-img img-fluid"
        variant="top"
        src={urlToImage?urlToImage:image1}
        alt="image from source"
        
      />
      <Card.Body>
        <Card.Title className="text-start"><b>{title}</b></Card.Title>
          <Card.Subtitle className="text-start mt-3">Author:<span className="text-success"> {author?author:"unknown"}</span></Card.Subtitle>
        
        <Card.Text className="text-start mt-3">{description?description:title}</Card.Text>
        
        <Card.Text className="text-start text-secondary"> Published on: {localDate}</Card.Text>

        <a href={url} target="_blank" rel="noreferrer">
          <Button
            className="mt-3"
            onClick={() => {
              window.location.href = url;
            }}
            variant="outline-dark"
          >
            
            <b>Read More</b>
          </Button>
        </a>
      </Card.Body>
    </Card>
  );
};

export default Items;
