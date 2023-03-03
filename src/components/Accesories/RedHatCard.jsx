import React from "react";
import "../../css/Accesories/RedHatCard.css";

const RedHatCard = ({ distro }) => {
  return (
    <div className="redhatcard-Container">
      <h3 className="redhatcard-Container_text">{distro.name}</h3>
      <img src={distro.image} className="redhatcard-Container_image" />
      <a href={distro.url} target="_blank" className="redhatcard-Container_a">
        Web
      </a>
    </div>
  );
};

export default RedHatCard;
