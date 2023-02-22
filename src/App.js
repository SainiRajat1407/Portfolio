import "./styles.css";
import NavBar from "./components/navbar/NavBar";
import Intro from "./components/intro/Intro";
import Services from "./components/services/Services";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
export default function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        className="app"
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : ""
        }}
      >
        <NavBar />
        <Intro />
        <Services />
        <Experience />
        <Works />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
