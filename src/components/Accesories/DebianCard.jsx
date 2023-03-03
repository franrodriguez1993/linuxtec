import React from "react";
import "../../css/Accesories/DebianCard.css";

const DebianCard = ({ distro }) => {
  return (
    <div className="debiancard-Container">
      <h3 className="debiancard-Container_text">{distro.name}</h3>
      <img src={distro.image} className="debiancard-Container_image" />
      <a href={distro.url} target="_blank" className="debiancard-Container_a">
        Web
      </a>
    </div>
  );
};

export default DebianCard;
