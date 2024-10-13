import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/nav";
import Main from "./components/main";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";
import { useState } from "react";
import Error from "./components/404";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode && "dark"}`}>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          exact
          path="/404"
          element={<Error darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route exact path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
