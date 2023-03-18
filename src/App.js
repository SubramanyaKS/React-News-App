//import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Routing from './Routing';
import NewsContext from './context/NewsContext';
function App() {
  return (
    <NewsContext>
    <Routing/>
    </NewsContext>
  );
}

export default App;
