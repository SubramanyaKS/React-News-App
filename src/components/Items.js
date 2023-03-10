import '../App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Items = ({ title, description, url, urlToImage,publishedAt,author,source }) => {
    
    return (
        // <div className="news-app">
        //     <div className='news-item'>
        //         <img  src={urlToImage} alt={urlToImage} />
        //         <h3><a style={{textDecoration:"none"}} href={url}>{title}</a></h3>
        //         <p>{description}</p>
        //     </div><img className='news-img' src={urlToImage} alt={urlToImage} />
        // </div>
        <Card className="text-center">
      <Card.Header>{source}</Card.Header>
      <Card.Img className="news-img" variant="top" src={urlToImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{author}</Card.Subtitle>
        <Card.Text>
         {description}
        </Card.Text>
        <a href={url} target="_blank" rel="noreferrer">
        <Button onClick={() => { window.location.href = url; } } variant="secondary">Read More</Button>
        </a>
      </Card.Body>
      <Card.Footer className="text-muted">{publishedAt}</Card.Footer>
    </Card>
    )
}

export default Items;