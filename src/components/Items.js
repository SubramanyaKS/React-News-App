import "../App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img from '../assets/news.jpg';

const Items = ({
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  author,
  source,
}) => {
  let localTime = new Date(publishedAt).toLocaleTimeString();
  // console.log(typeof localTime);
  // console.log(localTime);
  let localDate = new Date(publishedAt).toLocaleDateString();

  return (
    <Card className=" text-center">
      <Card.Header className="cheader">{source}</Card.Header>
      <Card.Img
        className="news-img img-fluid"
        variant="top"
        src={urlToImage?urlToImage:img}
        alt="image from source"
        
      />
      <Card.Body>
        <Card.Title><b>{title}</b></Card.Title>
        {author ? (
          <Card.Subtitle>Author: {author}</Card.Subtitle>
        ) : (
          <Card.Subtitle>Author: unknown</Card.Subtitle>
        )}
        <Card.Text className="text-start mt-3">{description}</Card.Text>
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

      <Card.Footer className="bg-success card-footer">
        Published on: {localDate} at {localTime}
      </Card.Footer>
    </Card>
  );
};

export default Items;
