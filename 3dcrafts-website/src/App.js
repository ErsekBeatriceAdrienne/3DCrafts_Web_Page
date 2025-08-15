import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#333" }}>
        <Link to="/" style={{ color: "#fff", marginRight: "15px" }}>Home</Link>
        <Link to="/about" style={{ color: "#fff", marginRight: "15px" }}>About</Link>
        <Link to="/contact" style={{ color: "#fff" }}>Contact</Link>
      </nav>

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
