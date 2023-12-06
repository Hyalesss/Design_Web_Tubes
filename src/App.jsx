import { Routes, Route } from "react-router-dom";
import FooterComponent from "./component/Footer";
import HomePages from "./pages/HomePages";
import Berita from "./pages/Berita";
import BeritaVideo from "./pages/VideoBerita";
import FaqBerita from "./pages/FaqBerita";
import NavbarComponent from "./component/Navbar";
import DetailBerita from "./pages/detailberita"

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/VideoBerita" element={<BeritaVideo />} />
        <Route path="/Faq" element={<FaqBerita />} />
        <Route path="/DetailBerita" element={<DetailBerita/>} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
