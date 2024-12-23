import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import Footer from './components/layout/Footer';

const ParkingLanding = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default ParkingLanding;
