import Main from "./components/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThankyouMessage from "./components/ThankyouMessage";

function App() {
  return (
    <>
        <Routes>
          <Route index element={<Main />} />
          <Route exact path="/portfolio-react-tailwind" element={<Main />} />
          <Route exact path="/success" element={<ThankyouMessage />} />
        </Routes>
    </>
  );
}

export default App;
