import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/nav";
import Main from "./components/main";
import Contact from "./components/contact";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <div>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
