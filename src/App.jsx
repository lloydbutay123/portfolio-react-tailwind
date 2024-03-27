import Main from "./components/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThankyouMessage from "./components/ThankyouMessage";
import Nav from "./components/nav";
import Contact from "./components/contact";
import About from "./components/about";
import Projects from "./components/projects";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/success" element={<ThankyouMessage />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
