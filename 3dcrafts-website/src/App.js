import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#1f2937", // sötét szürke
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    borderRadius: "8px",
  };

  const linkStyle = {
    color: "#fff",
    marginRight: "20px",
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.3s",
  };

  const linkHoverStyle = {
    color: "#fbbf24", // sárga hover szín
  };

  return (
    <Router>
      <nav style={navStyle}>
        <div style={{ fontWeight: "bold", fontSize: "1.2em" }}>3D Crafts</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link
            to="/"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
          >
            Home
          </Link>
          <Link
            to="/about"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
          >
            About
          </Link>
          <Link
            to="/contact"
            style={linkStyle}
            onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
          >
            Contact
          </Link>
        </div>
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
