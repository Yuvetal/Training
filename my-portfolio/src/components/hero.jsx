import React from "react";

function Hero() {
  return (
    <section style={{textAlign:"center", minHeight:"90vh", display:"flex", flexDirection:"column", justifyContent:"center"}}>
      <h1 style={{fontSize:"3rem", color:"#1A1AFF"}}>Hi, I'm Logu Ajith Kumar</h1>
      <p style={{fontSize:"1.5rem", marginTop:"20px", color:"#CCCCCC"}}>
        I'm a BlockChain Developer | React Enthusiast | Tech Explorer
      </p>
      <button style={{marginTop:"30px"}}>See My Work</button>
    </section>
  );
}
export default Hero;