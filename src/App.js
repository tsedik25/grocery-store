import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "react-scroll-up";
import arrow from "./images/arrow.png";
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
import Households from "./Pages/Households";
import Vegetables from "./Pages/Vegetables";
import Kitchen from "./Pages/Kitchen";
import { Drinks } from "./Pages/Drinks";
import Pet from "./Pages/Pet";
import Frozen from "./Pages/Frozen";
import Bread from "./Pages/Bread";
import PrivacyTerms from "./Pages/PrivacyTerms";
import Faq from "./Pages/Faq";


function App() {
    return (
        <Router>
            <ScrollToTop id="toTop" showUnder={160}>
                <img src={arrow} alt="" />
            </ScrollToTop>
            <Navbars />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/events" element={<Events />} />
                <Route path="/products" element={<BestDeals />} />
                <Route path="/services" element={<Services />} />
                <Route path="/mail" element={<ContactUs />} />
                <Route path="/household" element={<Households />} />
                <Route path="/vegetables" element={<Vegetables />} />
                <Route path="/kitchen" element={<Kitchen />} />
                <Route path="/drinks" element={<Drinks />} />
                <Route path="/pet" element={<Pet />} />
                <Route path="/frozen" element={<Frozen />} />
                <Route path="/bread" element={<Bread />} />
                <Route path="/privacy" element={<PrivacyTerms />} />
                <Route path="/faqs" element={<Faq />} />
            </Routes>
            <NewsLetter />
            <Footer />
        </Router>
    );
}

export default App;
