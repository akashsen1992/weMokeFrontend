import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Header from './component/Header';
import Footer from './component/Footer';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/Contact" element={<Contact />} /> 
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
