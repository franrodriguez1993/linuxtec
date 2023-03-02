import React from "react";
import "../../css/Accesories/LinuxCard.css";

const LinuxCard = ({ distro }) => {
  return (
    <div className="Card-Container">
      <h3 className="Card-Container_text">{distro.name}</h3>
      <img src={distro.image} className="Card-Container_image" />
      <a href={distro.url} target="_blank" className="Card-Container_a">
        Web
      </a>
    </div>
  );
};

export default LinuxCard;
