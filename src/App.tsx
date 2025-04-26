import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import CreditScoreCalculator from './components/CreditScoreCalculator';
import Testimonials from './components/Testimonials';
import SignUpForm from './components/SignUpForm';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Services />
        <CreditScoreCalculator />
        <Stats />
        <Testimonials />
        <SignUpForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;