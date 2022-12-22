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
    <Navbar
      style={{ color: "black" }}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand
          style={{
            fontFamily: "Comic Sans MS, Comic Sans, cursive",
            color: "#00ff0d",
          }}
        >
          QuickNews
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
          {a?<>
            <Nav.Link style={{color: "#00ff00",textDecoration: "none"}} href="/">
              <h4>Home</h4>
            </Nav.Link>
            <Nav.Link style={{color: "#00ff00",textDecoration: "none"}} href="/sports">
              <h4>Sports</h4>
            </Nav.Link>
            <Nav.Link style={{color: "#00ff00",textDecoration: "none"}} href="/business">
              <h4>Business</h4>
            </Nav.Link>
            <Nav.Link style={{color: "#00ff00",textDecoration: "none"}} href="/health">
              <h4>Health</h4>
            </Nav.Link>
            <Nav.Link style={{color: "#00ff00",textDecoration: "none"}} href="/science">
              <h4>Science</h4>
            </Nav.Link>
            <Nav.Link style={{color: "#00ff00",textDecoration: "none"}}  onClick={Logout}><h4>Log Out</h4> </Nav.Link>
            </>:<>
            <Nav.Link style={{color: "#00ff00",textDecoration: "none"}} href="/signup">
              <h4>Signup</h4>
            </Nav.Link>
            <Nav.Link style={{color: "#00ff00",textDecoration: "none"}} href="/login">
              <h4>Login</h4>
            </Nav.Link>
            </>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
      
  );
};
export default Header;
