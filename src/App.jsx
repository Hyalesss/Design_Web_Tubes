import { Routes, Route } from "react-router-dom"

import NavbarComponent from "./component/Navbar"
import FooterComponent from "./component/Footer"

import HomePages from "./pages/HomePages"
import Berita from "./pages/Berita"
import BeritaVideo from "./pages/VideoBerita"
import FaqBerita from "./pages/FaqBerita"

function App() {
  return (
    <div>
      <NavbarComponent/>

      <Routes>
        <Route path="/" Component={HomePages} />
        <Route path="/berita" Component={Berita} />
        <Route path="/VideoBerita" Component={BeritaVideo} />
        <Route path="/Faq" Component={FaqBerita} />
      </Routes>

      <FooterComponent/>
    </div>
  )
}

export default App