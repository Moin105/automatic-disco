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
function App() {
  return (
    <div className="App">
         <Header/>
         <Banner/>
         <Section/>
         <SimpleSlider/>
         <CarouselSection/>
         <ImagesGallery/>
         <Contact/>
         <Footer/>
    </div>
  );
}

export default App;