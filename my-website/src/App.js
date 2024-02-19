import About from "./assets/components/About";
import Home from "./assets/components/Home";
import NavBar from "./assets/components/NavBar";
import Portfolio from "./assets/components/Portfolio";
import SocialLinks from "./assets/components/SocialLinks";
import Experience from "./assets/components/Experience";
import Contact from "./assets/components/Contact";

function App() {
  return (
    
   <div>
    <NavBar />
    <Home />
    <About/>
    <Portfolio/>
    <SocialLinks />
    <Experience/>
    <Contact/>
   </div>
  );
}

export default App;
