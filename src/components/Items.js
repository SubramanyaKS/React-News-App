import '../App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Items = ({ title, description, url, urlToImage,publishedAt,author,source }) => {
  
  var localTime = new Date(publishedAt);
  // console.log(typeof localTime);
  // console.log(localTime);
  let local =''+localTime;


    return (
        // <div className="news-app">
       
        <Card className=" text-center">
      <Card.Header className="cheader">{source}</Card.Header>
      <Card.Img className="news-img" variant="top" src={urlToImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {author?<Card.Subtitle>Author: {author}</Card.Subtitle>:<Card.Subtitle>Author: unknown</Card.Subtitle>}
        <Card.Text className="mt-3">
         {description}
        </Card.Text>
        <a href={url} target="_blank" rel="noreferrer">
        <Button className="mt-3" onClick={() => { window.location.href = url; } } variant="outline-dark"><b>Read More</b></Button>
        </a>
      </Card.Body>

      <Card.Footer className="card-footer">{local}</Card.Footer>
    </Card>
    )
}

export default Items;