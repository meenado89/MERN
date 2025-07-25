import About from "./components/About";
import Home from "./components/Home";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Team from "./components/Team";
import { Routes, Route } from "react-router-dom";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
import "boxicons";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
