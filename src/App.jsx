import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";


export function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-gray-800">
        <Home />

        


      </div>
    </Router>
  );
}