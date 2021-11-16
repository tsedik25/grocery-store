import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Components/Navbars/Navbars';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import NewsLetter from './Components/NewsLetter/NewsLetter';
import FreshVegetables from './Components/FreshVegetables/FreshVegetables';
import TopBrands from './Components/TopBrands/TopBrands';


function App() {
  return (
    <div className="App">
      <Navbars/>
      <Banner/>
      <TopBrands/>
      <FreshVegetables/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default App;
