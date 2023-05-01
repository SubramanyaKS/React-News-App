import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
const Header = () => {
//   let a=sessionStorage.getItem('cAuthenticated');
//   const Logout=()=>{
//     sessionStorage.removeItem('cAuthenticated');
//     window.location.href = "/login";
// }
  return (
    <Navbar
      style={{ backgroundColor: "#a8a8a7" }}
      collapseOnSelect
      expand="lg"
      sticky="top"
      //bg="white"
      variant="white"
      shadow="lg"
      className="shadow-lg p-3 mb-5"
    >
      <Container>
        <Navbar.Brand
          style={{
            fontFamily: "Comic Sans MS, Comic Sans, cursive",
            color: "#00ff0d",
          }}
        >
          QuickNewz
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
          {/* {a?<> */}
            <Nav.Link style={{color: "#00ff00",textDecoration: "none"}} href="/">
              <h5>Home</h5>
            </Nav.Link>
            <Nav.Link style={{color: "#00ff00",textDecoration: "none"}} href="/sports">
              <h5>Sports</h5>
            </Nav.Link>
            <Nav.Link style={{color: "#00ff00",textDecoration: "none"}} href="/business">
              <h5>Business</h5>
            </Nav.Link>
            <Nav.Link style={{color: "#00ff00",textDecoration: "none"}} href="/health">
              <h5>Health</h5>
            </Nav.Link>
            <Nav.Link style={{color: "#00ff00",textDecoration: "none"}} href="/technology">
              <h5>Technology</h5>
            </Nav.Link>
            <Nav.Link style={{color: "#00ff00",textDecoration: "none"}} href="/science">
              <h5>Science</h5>
            </Nav.Link>
            {/* <Nav.Link style={{color: "#00ff00",textDecoration: "none"}}  onClick={Logout}><h5>Log Out</h5> </Nav.Link> */}
            {/* </>:<>
            <Nav.Link style={{color: "#00ff00",textDecoration: "none"}} href="/signup">
              <h5>Signup</h5>
            </Nav.Link>
            <Nav.Link style={{color: "#00ff00",textDecoration: "none"}} href="/login">
              <h5>Login</h5>
            </Nav.Link>
            </>} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
      
  );
};
export default Header;
