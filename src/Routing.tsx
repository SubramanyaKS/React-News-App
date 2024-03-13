import Header from './components/Header';
import Home  from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Routing = () => {
  return (
    <Router>
      <Header/>
      <Routes>
            <Route path="/" element={<Home/>} />
      </Routes>
      </Router>
  )
}

export default Routing;