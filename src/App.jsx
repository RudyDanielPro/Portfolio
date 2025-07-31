import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { CubeTransition } from "./components/CubeTransition";
import { Contact } from "./Pages/Contact";
import { Services } from "./Pages/Services";
import { Projects } from "./Pages/Projects";

export function App() {
  return (
    <Router>
      <div className="relative min-h-screen overflow-x-hidden bg-gray-800">
        <Routes>
          <Route path="/" element={
            <CubeTransition>
              <Home />
            </CubeTransition>
          } />
          <Route path="/about" element={
            <CubeTransition>
              <About />
            </CubeTransition>
          } />
          <Route path="/contact" element={
            <CubeTransition>
              <Contact />
            </CubeTransition>
          } />
          <Route path="/services" element={
            <CubeTransition>
              <Services />
            </CubeTransition>
          } />
          <Route path="/projects" element={
            <CubeTransition>
              <Projects />
            </CubeTransition>
          } />
         
        </Routes>
      </div>
    </Router>
  );
}