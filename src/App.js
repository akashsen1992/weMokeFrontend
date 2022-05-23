import './App.css';
import '../src/themes/global.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './component/Header';
import Footer from './component/Footer';
import Datetimeselection from './pages/Datetimeselection';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/Contact" element={<Contact />} /> 
        <Route exact path='datetime/:id' element={<Datetimeselection/>} />
        <Route path=":id" element={<Datetimeselection />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
