import React from "react";
import "../css/HomeRoute/HomeRoute.css";
import { useNavigate } from "react-router-dom";
const HomeRoute = () => {
  const navigate = useNavigate();
  return (
    <div className="homeroute-container">
      <img
        src="/img/linuxBanner.png"
        alt="banner"
        className="homeroute-banner"
      />

      <div className="homeroute-distros">
        <a className="homeroute-distro_card" href="/debian">
          <img src="/img/debian.png" alt="debian" className="hrcard-img_left" />
          <h2 className="hrcard-title">Debian</h2>
        </a>

        <hr className="homeroute-hr" />

        <a className="homeroute-distro_card" href="/rpm">
          <h2 className="hrcard-title">Red Hat</h2>
          <img
            src="/img/redhatDistro.png"
            alt="red hat"
            className="hrcard-img_right"
          />
        </a>

        <hr className="homeroute-hr" />
        <a className="homeroute-distro_card" href="/arch">
          <img src="/img/arch.png" alt="arch" className="hrcard-img_left" />
          <h2 className="hrcard-title">Arch</h2>
        </a>

        <hr className="homeroute-hr" />
      </div>
    </div>
  );
};

export default HomeRoute;
