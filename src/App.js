import React from 'react'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Services from './components/Services/Services';
// import Portfolio from './components/Portfolio/Portfolio';
// import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/conatct/Contact';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <About/>
    <Experience/>
    <Services/>
    {/* <Portfolio/> */}
    {/* <Testimonial/> */}
    <Contact/>
    <Footer/>
    </>
  )
}

export default App;
