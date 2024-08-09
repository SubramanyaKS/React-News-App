import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// import ToggleSwitch from "./ToggleSwitch";
import { ToggleSwitch } from 'reactjs-toggleswitch';
import { useContext } from "react";
import { ToggleContext } from "../context/ToggleContext";

const Header:React.FC = () => {
  const {toggle,setToggle} = useContext(ToggleContext);
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
      style={{ backgroundColor: toggle?"#222222":"#fff" }}
      collapseOnSelect
      expand="lg"
      sticky="top"
      variant={toggle?"dark":"white"}
      className={toggle?"shadow-dark p-3":"shadow-lg p-3"}
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
          <Nav>
            <ToggleSwitch checked={toggle} onToggle={()=>setToggle(!toggle)} onColor='#0f0'/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
      
  );
};
export default Header;
