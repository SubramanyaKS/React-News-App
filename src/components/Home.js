import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
const Home = () => {
  const [authenticated, setauthenticated] = useState(null);

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("cAuthenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);
  if (!authenticated) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <div className="home">
        <h1>Welcome to the Home Page</h1>
      </div>
    );
  }
};
export default Home;