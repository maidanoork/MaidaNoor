import About from "./Components/About";
import Achievements from "./Components/Achievements";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Title from "./Components/Title";



export default function Home() {
  return (
    <>
    <Navbar />
    <Hero/>
    <Title subTitle="My Skills" title="What I can do"/>
    <Skills/>
    <About/>
    <Title subTitle="Achievements" title="My Certificates"/>
    <Achievements/>
    <Title subTitle="Portfolio" title="My Projects"/>
    <Projects/>
    <Title subTitle="Contact Us" title="Get in Touch"/>
    <Contact/>
    <Footer/>

    </>
  );
}
