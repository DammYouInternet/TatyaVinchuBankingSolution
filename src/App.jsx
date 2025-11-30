import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import LearnMore from './pages/LearnMore';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';
import PageTransition from './components/PageTransition';

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <PageTransition>
                <Hero />
              </PageTransition>
            } />
            <Route path="/learn-more" element={
              <PageTransition>
                <LearnMore />
              </PageTransition>
            } />
            <Route path="/features" element={
              <PageTransition>
                <Features />
              </PageTransition>
            } />
            <Route path="/pricing" element={
              <PageTransition>
                <Pricing />
              </PageTransition>
            } />
            <Route path="/about" element={
              <PageTransition>
                <About />
              </PageTransition>
            } />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
