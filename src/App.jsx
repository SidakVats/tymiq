import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Core Services/Services";
import Blog1 from "./components/Blogs/Blog1";
import ChooseUs from "./components/Why Choose Us/ChooseUs";
import Experties from "./components/Key Experties/Experties";
import Newsletter from "./components/Newsletter/Newsletter";
import CaseStudySwiper from "./components/Case Studies/CaseStudySwiper";
import TechStack from "./components/TechStack/TechStack";
import Working from "./components/Working Concepts/Working";
import Contact from "./components/Contact Banner/Contact";
import Footer from "./components/Footer/Footer";




function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <Blog1/>
    <ChooseUs/>
    <Experties/>
    <Newsletter/>
    <CaseStudySwiper/>
    <TechStack/>
    <Working/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
