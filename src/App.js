//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home  from './components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import News from './components/News';
import Sports from './components/Sports';
import Business from './components/Business';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
            <Route exact path="/" element={<Home Component={News}/>} />
            <Route exact path="/sports" element={<Home Component={Sports}/>} />
            <Route exact path="/business" element={<Home Component={Business}/>} />
            <Route exact path="/news" element={<News/>} />
            <Route exact path="/signup" element={<SignUp/>} />
            <Route exact path="/login" element={<Login />} />
      </Routes>

    </Router>
    
  );
}

export default App;
