import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import LearnMore from './pages/LearnMore';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/learn-more" element={<LearnMore />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
