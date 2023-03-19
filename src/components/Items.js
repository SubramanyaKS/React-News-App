import '../App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Items = ({ title, description, url, urlToImage,publishedAt,author,source }) => {
    
    return (
        // <div className="news-app">
       
        <Card className="shadow-lg text-center">
      <Card.Header className="cheader">{source}</Card.Header>
      <Card.Img className="news-img" variant="top" src={urlToImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {author?<Card.Subtitle>Author: {author}</Card.Subtitle>:<Card.Subtitle>Author: unknown</Card.Subtitle>}
        <Card.Text>
         {description}
        </Card.Text>
        <a href={url} target="_blank" rel="noreferrer">
        <Button onClick={() => { window.location.href = url; } } variant="outline-dark">Read More</Button>
        </a>
      </Card.Body>
      <Card.Footer className="card-footer">{publishedAt}</Card.Footer>
    </Card>
    )
}

export default Items;