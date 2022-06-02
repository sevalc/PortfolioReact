
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navigation from "./components/navigation/Navigation";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer"
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import Portfolio from "./components/pages/Portfolio"

import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
                <Navigation/>
            <Routes>
                <Route path="/" element={<About/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/resume" element={<Resume/>}/>
            </Routes>
                <Footer/>
        </BrowserRouter>
  );
}

export default App;
