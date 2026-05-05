import "./App.css";
import  Navbar  from "./components/navbar";
import NiceText from "./components/NiceText";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Connect from "./components/Connect";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Process from "./components/Process";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="app">
      {/* <h1>Kashish Portfolio 🚀</h1> */}
      <Navbar/>
      <NiceText/>
      <Hero/>
      <Experience/>
      <Connect/>
      <Projects/>
      <Skills/>
      <Process/>
      <Contact/>
    </div>
  );
}

export default App;
