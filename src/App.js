import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import ScrollToTop from "./Components/ScrollToTop";
import Experience from "./Components/Experience/Experience";
import ComContact from "./Components/ComContact/ComContact";
import { FiCode } from "react-icons/fi";
import { BsBraces } from "react-icons/bs";

function App() {
  const [theme, setTheme] = useState({
    background: `bg_dark`,
    text: `text_dark`,
  });

  return (
    <div className="App">
      <Nav theme={theme} setTheme={(theme) => setTheme(theme)} />
      <Header theme={theme} />
      <About theme={theme} />
      <Skills
        theme={theme}
        skill={[
          {
            iconSkill: <BsBraces className={`fs-2 ${theme.text} active`} />,
            titleSkill: `Front-End Developer`,
            yearsOfSkill: 4,
            listOfSkills: [
              { title: `HTML`, level: `90` },
              { title: `CSS`, level: `80` },
              { title: `Bootstrap`, level: `90` },
              { title: `JAVASCRIPT`, level: `80` },
              { title: `REACT`, level: `60` },
            ],
          },
        ]}
      />
      <Experience
        theme={theme}
        eductions={[
          {
            address: `Damascus - University`,
            title: `Computer Science`,
            date: `2019 - Now`,
          },
        ]}
        works={[]}
      />
      <Services
        theme={theme}
        services={[
          {
            icon: <FiCode className={`fs-3`} style={{ color: "#685bcd" }} />,
            title: `Front-End Developer`,
            info: [
              `I Develope The User Interface.`,
              `Web Page Development.`,
              `I Create Ux Element Interactions.`,
              `I Position Your Company Brand.`,
            ],
          },
        ]}
      />

      <Portfolio theme={theme} />
      <ComContact theme={theme} />
      <Testimonials theme={theme} TM={[]} />
      <Contact theme={theme} />
      <Footer theme={theme} />
      <ScrollToTop theme={theme} />
    </div>
  );
}

export default App;
