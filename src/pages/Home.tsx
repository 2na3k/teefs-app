// src/pages/Home.tsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features.tsx';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;