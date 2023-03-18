import '../App.css';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState({ id: "",pnumber : "",password: ""});
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/users")
      .then((response) => { setUser(response.data) })
      .catch((error) => { console.log(error) })
  }, [])

  function login(event){
    event.preventDefault();

    var pnumber=users.pnumber;
    //console.log(id);

    var password = users.password;
    //console.log(password);

    let emp = user.find(
      function (el) {
        
        return (String(el.pnumber) === pnumber && String(el.password)===password);
        
      }
    )
    console.log("True or False",emp!=null);
    console.log("Emp",emp);
    if(emp!=null){
      sessionStorage.setItem("cAuthenticated",true);
      window.location.href = "/";
    }
    else{
      setErrorMsg("Invalid Credentials");
    }
    //console.log(emp);
  }


  const handleChange = (event) => {
    setUsers({ ...users, [event.target.name]: event.target.value })
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <div className="form">
        <form onSubmit={login}>
        
        <input name="pnumber" type="text" value={users.pnumber} onChange={handleChange} placeholder="Enter the Phone Number:" />
        <input name="password" type="password" value={users.password} onChange={handleChange} placeholder="Enter the Password:"/>
        {/* <input type="button" className="btn" value="Sign Up" /> */}
        <button type="submit" value="Submit"  className="btn">Sign Up </button>
       <br/> <p>
          Not register? <Link style={{color:"#00ff00", textDecoration: "none"}} to="/signup">Register</Link> 
        </p>
        {(errorMsg) ? <p style={{color:"red"}}>{errorMsg}</p> : null}
        </form>
      </div>
    </div>
  );
};
export default Login;
