//import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Routing from './Routing';
import { NewProvider } from './context/NewsContext';
function App() {
  return (
    <NewProvider>
    <Routing/>
    </NewProvider>
  );
}

export default App;
