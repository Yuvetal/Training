import React from "react";

function Contact() {
  return (
    <section id="contact">
      <h2 style={{color:"#1A1AFF", marginBottom:"20px"}}>Contact Me</h2>
      <form style={{display:"flex", flexDirection:"column", maxWidth:"400px", gap:"15px"}}>
        <input type="text" placeholder="Your Name" style={{padding:"10px", borderRadius:"8px", border:"1px solid #333"}}/>
        <input type="email" placeholder="Your Email" style={{padding:"10px", borderRadius:"8px", border:"1px solid #333"}}/>
        <textarea placeholder="Your Message" style={{padding:"10px", borderRadius:"8px", border:"1px solid #333"}}/>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
export default Contact;