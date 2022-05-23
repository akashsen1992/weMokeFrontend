import './App.css';
import '../src/themes/global.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import Header from './component/Header';
import Footer from './component/Footer';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route exact path="/" element={<Home />}>
        <Route exact path='/contact' element={<Contact/>} />
      </Route>
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
