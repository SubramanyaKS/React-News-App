//import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Routing from './Routing';
import { NewsProvider } from './context/NewsContext';
import { ToggleProvider } from './context/ToggleContext';
// import 'reactjs-toggleswitch/dist/cjs/index.css';
const App:React.FC=()=> {
  return (
    <ToggleProvider>
    <NewsProvider>
    <Routing/>
    </NewsProvider>
    </ToggleProvider>
  );
}

export default App;
