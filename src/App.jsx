import React from "react"
import HeroSection from "./pages/Herosection";
import Navbar from "./pages/Navbar";
import AboutMe from "./pages/AboutMe";
import MyPortfolio from "./pages/MyPortfolio";
import MySkills from "./pages/MySkills";
import Footer from "./pages/Footer";


function App() {
 
  return (
    <div>
      <HeroSection/>
      <Navbar/>
      <AboutMe/>
      <MyPortfolio/>
      <MySkills/>
      <Footer/>
      

    </div>

  )
}

export default App
