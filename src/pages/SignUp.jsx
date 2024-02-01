import '../App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState({ id: "",name:"",pnumber : "",password: ""});
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:4000/users")
      .then((response) => { setUser(response.data) })
      .catch((error) => { console.log(error) })
  }, []);

  const handleAddSubmit = (event) => {
    event.preventDefault();
      axios.post("http://localhost:4000/users", users)
        .then((response) => {
          setUser([...user, response.data])
          navigate("/login");
          //setSuccesMsg("New Bookings has been added with the book id " + response.data.id)
        })
        .catch((error) => {
          setErrorMsg(error);
        })
  }

  const handleChange = (event) => {
    setUsers({ ...users, [event.target.name]: event.target.value })
  }

  return (
    <div className="signup" bg="dark">
      <br/>
      <h1>Sign Up</h1><br/>
      <div className="form">
        <form onSubmit={handleAddSubmit}>
        <input name="name" type="text" value={users.name} onChange={handleChange} placeholder="Enter the Name:" />
        <input name="pnumber" type="text" value={users.pnumber} onChange={handleChange} placeholder="Enter the Number:" />
        <input name="password" type="password" value={users.password} onChange={handleChange} placeholder="Enter the Password:"/>
        {/* <input type="button" className="btn" value="Sign Up" /> */}
        <button name="Submit" value="Submit" className="btn">Sign Up </button><br/>
        <br/><p>
          Already register?<Link style={{color:"#00ff00", textDecoration: "none"}} to="/login">Login</Link> 
        </p>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
