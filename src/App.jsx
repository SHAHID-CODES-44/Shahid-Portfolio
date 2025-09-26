import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Certificates } from "./components/Certificates/Certificates";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hackathons } from "./components/Hackathons/Hackathons";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Hackathons/>
      <Certificates/>
      <Contact />
    </div>
  );
}

export default App;
