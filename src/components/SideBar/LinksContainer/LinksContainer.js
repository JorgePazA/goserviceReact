import React from "react";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import "./LinksContainer.css";
import { Link } from 'react-router-dom';

function LinksContainer() {
  return (
    <div className="links">
      <div className="pageLinks " id="pagelink1">

        <div className="dashboard">
          <RiHomeLine />
          <Link to="/">Métricas</Link>
        </div>
        <div className="projects">
          <RiFileCopyLine />
          <Link to="/gogers">Gogers</Link>
        </div>
        <div className="projects">
          <RiFileCopyLine />
          <Link to="/users">Usuarios</Link>
        </div>
        {/* <div className="projects">
            <RiFileCopyLine />
            <Link to="/MainContent">Metricas</Link>
          </div> */}
      </div>
      <div className="contact">
        <span>¿Tienes Dudas?</span>
        <a href="a">Contactanos</a>
      </div>
    </div>
  );
}

export default LinksContainer;
