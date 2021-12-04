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
import Profile from "./Pages/Profile";
import Pizza from "./Pages/Pizza";
import Momo from "./Pages/Momo";
import Noodles from "./Pages/Noodles";
import Chilli from "./Pages/Chilli";
import Sandwich from "./Pages/Sandwich";
import HealthyChoice from "./Pages/HealthyChoice";
import Rice from "./Pages/Rice";
import Checkout from "./Pages/Checkout";
import ForgotPassword from "./Pages/ForgotPassword";


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
                <Route path="/momo" element={<Momo />} />
                <Route path="/noodles" element={<Noodles />} />
                <Route path="/pizza" element={<Pizza />} />
                <Route path="/chilli" element={<Chilli />} />
                <Route path="/sandwich" element={<Sandwich />} />
                <Route path="/healthy%20choice" element={<HealthyChoice />} />
                <Route path="/rice" element={<Rice />} />
                <Route path="/privacy" element={<PrivacyTerms />} />
                <Route path="/faqs" element={<Faq />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
            </Routes>
            <NewsLetter />
            <Footer />
        </Router>
    );
}

export default App;
