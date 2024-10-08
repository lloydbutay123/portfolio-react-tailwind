import Main from "./components/main";
import { Routes, Route, Navigate } from "react-router-dom";
import ThankyouMessage from "./components/ThankyouMessage";
import Nav from "./components/nav";
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
        <Route exact path="/success" element={<ThankyouMessage />} />
        <Route exact path="/404" element={<Error darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route exact path="*" element={<Navigate to='/404'/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
