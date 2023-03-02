import React from "react";
import "../css/ArchRoute/ArchRoute.css";
import linux from "../json/linux.json";
import LinuxCard from "../components/Accesories/LinuxCard";

const ArchRoute = () => {
  return (
    <div className="DebianRoute-Container">
      <div className="Title-Container">
        <img src={linux.arch.image} className="Title-Container_image" />
        <h1 className="Title-Container_text">{linux.arch.name}</h1>
      </div>
      <div className="Description-Container">
        <h5>Descripción</h5>
        <p className="Description-Container_text">{linux.arch.description}</p>
        <hr className="Description-Container_HR" />
        <h5>Distros más populares</h5>
        <section className="section-container_distros">
          {linux.arch.distros.map((r, index) => (
            <LinuxCard distro={r} key={index} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default ArchRoute;
