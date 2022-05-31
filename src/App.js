
//import './App.css';
import Navigation from "./components/navigation/Navigation";
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
                <Navigation/>
            <Routes>
                {/* <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/works" element={<Works/>}/>
                <Route path="/:contact" element={<Contact/>}/> */}
            </Routes>
        </BrowserRouter>
  );
}

export default App;
