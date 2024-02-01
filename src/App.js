import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.scss";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/Homepage";
import NotFound from "./pages/NotFound/NotFound";
import Main from "./components/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Main />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
