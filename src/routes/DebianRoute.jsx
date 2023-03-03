import React from "react";
import DebianCard from "../components/Accesories/DebianCard";
import "../css/DebianRoute/DebianRoute.css";
import linux from "../json/linux.json";
const DebianRoute = () => {
  return (
    <div className="DebianRoute-Container">
      <div className="Title-Container">
        <img src={linux.debian.image} className="Title-Container_image" />
        <h1 className="dr-title-Container_text">{linux.debian.name}</h1>
      </div>
      <div className="dr-description-Container">
        <h5>Descripción</h5>
        <p className="Description-Container_text">{linux.debian.description}</p>
        <hr className="Description-Container_HR" />
        <h5>Distros más populares</h5>
        <section className="section-container_distros">
          {linux.debian.distros.map((r, index) => (
            <DebianCard distro={r} key={index} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default DebianRoute;
