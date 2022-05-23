import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import Contact from './Contact';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home />}>
        <Route exact path='/contact' element={<Contact/>} /> 

      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
