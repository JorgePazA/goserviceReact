import React from "react";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import "./LinksContainer.css";

function LinksContainer() {
  return (
    <div className="links">
      <div className="pageLinks " id="pagelink1">
        <div className="dashboard">
          <RiHomeLine />
          <h3>Dashboard</h3>
        </div>
        <div className="projects">
          <RiFileCopyLine />
          <h3>Gogers</h3>
        </div>
      </div>
      <div className="contact">
        <span>¿Tienes Dudas?</span>
        <a href="a">Contactanos</a>
      </div>
    </div>
  );
}

export default LinksContainer;
