import Main from "./components/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThankyouMessage from "./components/ThankyouMessage";
import Nav from "./components/nav";
import Contact from "./components/contact";
import About from "./components/about";
import Projects from "./components/projects";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/success" element={<ThankyouMessage />} />
      </Routes>
    </>
  );
}

export default App;
