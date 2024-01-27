import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import colorSharp2 from "./assets/img/skills.png";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <img className="background-image-right" src={colorSharp2}></img>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
