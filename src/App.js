import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Section from './components/Section/Section';
import CarouselSection from './components/CarouselSection/CarouselSection';
import ImagesGallery from './components/Images/ImagesGallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import SimpleSlider from './components/CarouselSection/Slick';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useSearchParams,
} from "react-router-dom";
import Services from './Pages/Services';
import BannerPage from './Pages/Banner';
import UpforSale from './Pages/Upforsale';
import Contacts from './Pages/ContactUs';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<>
            <Header/>
         <Banner/>
         <Section/>
         <SimpleSlider/>
         <CarouselSection/>
         <ImagesGallery/>
         <Contact/>
         <Footer/>
          </>} />
          <Route path="/services" element={<Services />} />
        
          <Route path="/home" element={<BannerPage />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/upforsale" element={<UpforSale />} />
        
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
       
         <div className='yellow'>
         </div>
    </div>
  );
}

export default App;