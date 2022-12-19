import { useEffect } from "react";
import { useNavigate } from "react-router";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
//import Items from "./Items";

const Home = (props) => {
  const {Component}=props;
  const navigate= useNavigate();
  useEffect(()=>{
    const login = sessionStorage.getItem("cAuthenticated");
    console.log("Login",login);
    if(!login){
      navigate('/login');
    }

  })
  return(
    <div>
      <Component/>


    </div>
  )
  
  
};
export default Home;