import { Routes, Route } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Rotas */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/sobre-mim" element={<About />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
