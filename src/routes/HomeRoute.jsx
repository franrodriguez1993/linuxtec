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
        <article
          className="homeroute-distro_card"
          onClick={() => navigate("/debian")}
        >
          <img src="/img/debian.png" alt="debian" className="hrcard-img_left" />
          <h2 className="hrcard-title">Debian</h2>
        </article>

        <hr className="homeroute-hr" />

        <article
          className="homeroute-distro_card"
          onClick={() => navigate("/rpm")}
        >
          <h2 className="hrcard-title">Red Hat</h2>
          <img
            src="/img/redhatDistro.png"
            alt="red hat"
            className="hrcard-img_right"
          />
        </article>

        <hr className="homeroute-hr" />
        <article
          className="homeroute-distro_card"
          onClick={() => navigate("/arch")}
        >
          <img src="/img/arch.png" alt="arch" className="hrcard-img_left" />
          <h2 className="hrcard-title">Arch</h2>
        </article>

        <hr className="homeroute-hr" />
      </div>
    </div>
  );
};

export default HomeRoute;
