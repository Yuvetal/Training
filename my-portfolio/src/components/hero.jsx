import React, { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const roles = [
    "BlockChain Developer",
    "React Enthusiast",
    "Tech Explorer",
  ];
  const [currentText, setCurrentText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + currentRole[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setCurrentText("");
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex]);

  return (
    <section className="hero">
      <div className="hero-content">
        {/* LEFT SIDE */}
        <div className="hero-text">
          <h1>Hi, I'm Logu Ajith Kumar</h1>
          <p>I'm a {currentText}|</p>
          <button>See My Work</button>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-img">
          <img src="profile.jpeg" alt="profile" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
