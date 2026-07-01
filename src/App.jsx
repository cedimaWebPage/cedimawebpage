import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Features from "./components/Features";
import Stats from "./components/Stats.jsx";
import Testimonials from "./components/Testimonials";
import CTA from "./components/Cta";
import Footer from "./components/Footer";
import PaqueteFamiliar from "./pages/PaqueteFamiliar";
import PaqueteMedico from "./pages/PaqueteMedico";
import PaqueteVIP from "./pages/PaqueteVIP";
import PaqueteElite from "./pages/PaqueteElite";
import Radiologia from "./pages/Radiologia";
import ConsultaEspecializada from "./pages/ConsultaEspecializada";
import Optometria from "./pages/Optometria";
import CirugiaProgamada from "./pages/CirugiaProgramada.jsx";
import Ginecologia from "./pages/Ginecologia.jsx";
import Procedimientos from "./pages/Procedimientos.jsx";

function HomePage() {
  return (
    <>
      <Hero />
      <Programs />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/paquete-familiar" element={<PaqueteFamiliar />} />
          <Route path="/paquete-medico" element={<PaqueteMedico />} />
          <Route path="/paquete-vip" element={<PaqueteVIP />} />
          <Route path="/paquete-elite" element={<PaqueteElite />} />
          <Route path="/servicios/radiologia" element={<Radiologia />} />
          <Route
            path="/servicios/consulta-especializada"
            element={<ConsultaEspecializada />}
          />
          <Route path="/servicios/optometria" element={<Optometria />} />
          <Route
            path="/servicios/cirugia-programada"
            element={<CirugiaProgamada />}
          />
          <Route path="/servicios/ginecologia" element={<Ginecologia />} />
          <Route
            path="/servicios/procedimientos"
            element={<Procedimientos />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
