import React from "react";
import "../css/ArchRoute/ArchRoute.css";
import linux from "../json/linux.json";
import ArchCard from "../components/Accesories/ArchCard";

const ArchRoute = () => {
  return (
    <div className="archRoute-Container">
      <div className="Title-Container">
        <img src={linux.arch.image} className="Title-Container_image" />
        <h1 className="ar-title-Container_text">{linux.arch.name}</h1>
      </div>
      <div className="Description-Container">
        <h5>Descripción</h5>
        <p className="Description-Container_text">{linux.arch.description}</p>
        <hr className="Description-Container_HR" />
        <h5>Distros más populares</h5>
        <section className="section-container_distros">
          {linux.arch.distros.map((r, index) => (
            <ArchCard distro={r} key={index} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default ArchRoute;
