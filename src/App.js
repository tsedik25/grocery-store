import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./Components/Navbars/Navbars";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Navbars />
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/* <Route path="/about" element={<About/>}/> */}
            </Routes>
            <NewsLetter />
            <Footer />
        </Router>
    );
}

export default App;
