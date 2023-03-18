import React from 'react'
import Header from './components/Header';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home  from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import News from './components/News';
import AllNews from './components/AllNews';

const Routing = () => {
  return (
    <Router>
      <Header/>
      <Routes>
            <Route exact path="/" element={<Home Component={News}/>} />
            <Route exact path="/sports" element={<AllNews name="sports"/>} />
            <Route exact path="/business" element={<AllNews name="business"/>} />
            <Route exact path="/science" element={<AllNews name="science"/>} />
            <Route exact path="/health" element={<AllNews name="health"/>} />
            <Route exact path="/technology" element={<AllNews name="technology"/>} />
            <Route exact path="/news" element={<News/>} />
            <Route exact path="/signup" element={<SignUp/>} />
            <Route exact path="/login" element={<Login />} />
      </Routes>
      </Router>
  )
}

export default Routing;