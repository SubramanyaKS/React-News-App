import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
const Header = () => {
//   let a=sessionStorage.getItem('cAuthenticated');
//   const Logout=()=>{
//     sessionStorage.removeItem('cAuthenticated');
//     window.location.href = "/login";
// }
const handleGitHubClick = () => {
  // Navigate to GitHub
  window.open('https://github.com/SubramanyaKS/React-News-App', '_blank');
};

  return (
    <Navbar
      style={{ backgroundColor: "#fff" }}
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
          <Nav >
            <Nav.Link onClick={()=>handleGitHubClick()} className="text-success text-decoration-none">Github</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
      
  );
};
export default Header;
