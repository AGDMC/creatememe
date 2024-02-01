import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.scss";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/Homepage";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
