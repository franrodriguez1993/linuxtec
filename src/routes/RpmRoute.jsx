import React from "react";
import RedHatCard from "../components/Accesories/RedHatCard";
import "../css/RpmRoute/RpmRoute.css";
import linux from "../json/linux.json";

const RpmRoute = () => {
  return (
    <div className="rpmRoute-Container">
      <div className="Title-Container">
        <img src={linux.rpm.image} className="Title-Container_image" />
        <h1 className="rhr-title-Container_text">{linux.rpm.name}</h1>
      </div>
      <div className="Description-Container">
        <h5>Descripción</h5>
        <p className="Description-Container_text">{linux.rpm.description}</p>
        <hr className="Description-Container_HR" />
        <h5>Distros más populares</h5>
        <section className="section-container_distros">
          {linux.rpm.distros.map((r, index) => (
            <RedHatCard distro={r} key={index} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default RpmRoute;
