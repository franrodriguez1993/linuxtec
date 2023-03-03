import React from "react";
import "../../css/Accesories/ArchCard.css";

const ArchCard = ({ distro }) => {
  return (
    <div className="archcard-Container">
      <h3 className="archcard-Container_text">{distro.name}</h3>
      <img src={distro.image} className="archcard-Container_image" />
      <a href={distro.url} target="_blank" className="archcard-Container_a">
        Web
      </a>
    </div>
  );
};

export default ArchCard;
