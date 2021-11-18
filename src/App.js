import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./Components/Navbars/Navbars";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Events from "./Pages/Events";
import AboutUs from "./Pages/AboutUs";
import BestDeals from "./Pages/BestDeals";
import { Services } from "./Pages/Services";
import ContactUs from "./Pages/ContactUs";

function App() {
    return (
        <Router>
            <Navbars />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/events" element={<Events/>}/>
                <Route path="/products" element={<BestDeals/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/mail" element={<ContactUs/>}/>
            </Routes>
            <NewsLetter />
            <Footer />
        </Router>
    );
}

export default App;
