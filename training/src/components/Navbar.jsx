import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState("Home");

  const navItems = ["Home", "About", "Contact"];

  return (
     <nav
  style={{
    padding: "10px 20px",
    backgroundColor: "#f5f5f5",
    position: "fixed",      // 👈 makes it stay at top
    top: 0,                 // 👈 sticks it to the top edge
    left: 0,
    width: "100%",          // 👈 full width
    zIndex: 1000,           // 👈 stays above other elements
  }}
>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo */}
        <div style={{ fontWeight: "bold", fontSize: "20px", cursor: "pointer" }}>
          My Website
        </div>

        {/* Menu */}
        <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
          {navItems.map((item) => (
            <li
              key={item}
              style={{
                marginLeft: "20px",
                cursor: "pointer",
                color: active === item ? "blue" : "black",
              }}
              onClick={() => setActive(item)}
            >
              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

