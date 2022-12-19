import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';
const Header = () => {
  let a=sessionStorage.getItem('cAuthenticated');
  const Logout=()=>{
    sessionStorage.removeItem('cAuthenticated');
    window.location.href = "/login";
}
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{color:"#00ff00"}} href="#home">Today News</Navbar.Brand>
          <Nav>
            {a?<>
            <Nav.Link style={{color:"#00ff00"}} href="/">Home</Nav.Link>
            <Link style={{margin:"0.5rem",color: "#00ff00",textDecoration: "none"}}  onClick={Logout}> Log Out </Link></>
            :<>
            <Nav.Link style={{color:"#00ff00"}} href="/signup">Signup</Nav.Link>
            <Nav.Link style={{color:"#00ff00"}} href="/login">Login</Nav.Link>
           
            </>}
            </Nav>
        </Container>
      </Navbar>
  );
};
export default Header;
