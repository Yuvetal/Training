import React from "react";

function Projects() {
  const projects = [
    {title:"Project 1", desc:"Short description here", link:"#"},
    {title:"Project 2", desc:"Short description here", link:"#"},
    {title:"Project 3", desc:"Short description here", link:"#"},
  ];

  return (
    <section id="projects">
      <h2 style={{color:"#1A1AFF", marginBottom:"20px"}}>Projects</h2>
      <div style={{display:"flex", gap:"20px", flexWrap:"wrap"}}>
        {projects.map((p, index) => (
          <div key={index} style={{
            backgroundColor:"#111111", padding:"20px", borderRadius:"12px", minWidth:"250px", flex:"1"
          }}>
            <h3 style={{color:"#1A1AFF"}}>{p.title}</h3>
            <p style={{color:"#CCCCCC"}}>{p.desc}</p>
            <a href={p.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;