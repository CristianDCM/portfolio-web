import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";//Manejo de animaciones en la pagina
AOS.init({
  duration: 500,
});

function App() {
  useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => console.log(data));
  },[])
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;