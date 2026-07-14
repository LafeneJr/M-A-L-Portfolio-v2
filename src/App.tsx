import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components/layout/Navbar";
import { Sidebar } from "./components/layout/Sidebar";

import { Home } from "./pages/Home";
import { Background } from "./components/layout/Background";
import { About} from "./pages/About";
import { Projects } from "./pages/Project";
import { Contact } from "./pages/Contact";
import { Experience } from "./pages/Experience";

export default function App() {
  return (
    <>
      <Background />
      <Navbar />
      <Sidebar />

      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>
  );
}