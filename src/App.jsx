import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/landingpage/About';
import HeroSection from './components/landingpage/HeroSection';
import Service from './components/landingpage/Service';
import VehicleProduct from './components/landingpage/VehicleProduct';
import { Element } from 'react-scroll';

function App() {
  return (
    <>
      <Header />
      <Element className="element" name="home">
        <HeroSection />
      </Element>
      <Element className="element" name="about">
        <About />
      </Element>
      <Element className="element" name="servicess">
        <Service />
      </Element>
      <Element className="element" name="vehicle">
        <VehicleProduct />
      </Element>
      <Footer />
    </>
  );
}

export default App;
