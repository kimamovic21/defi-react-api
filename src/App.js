import React from 'react'
import Featured from './components/Featured'
import Footer from './components/Footer';
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Signup from './components/Signup';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Signup/>
      <Footer/>
    </>
  );
}

export default App;
