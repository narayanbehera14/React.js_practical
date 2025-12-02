import React from "react";

function App() {
  return (
    <div>

      {/* Header */}
      <header
        style={{
          backgroundColor: "#282c34",
          color: "white",
          padding: "15px",
          textAlign: "center",
        }}
      >
        <h1>My First React Application</h1>
      </header>

      {/* Navigation */}
      <nav
        style={{
          backgroundColor: "#f4f4f4",
          padding: "10px",
          borderBottom: "1px solid #ccc",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <a
              href="#home"
              style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main style={{ padding: "20px", textAlign: "center" }}>
        <h2>Assignment Output</h2>
        <p>The Header and Navigation above are separate sections inside App.js.</p>
      </main>
    </div>
  );
}

export default App;
