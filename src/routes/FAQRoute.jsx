import React, { useEffect } from "react";
import Advantages from "../components/FAQRoute/Advantages";
import Characteristic from "../components/FAQRoute/Characteristic";
import History from "../components/FAQRoute/History";
import WhatIs from "../components/FAQRoute/WhatIs";
import "../css/FAQRoute/FAQRoute.css";
const FAQRoute = () => {
  /**  TO REDIRECT TO AN SPECIFIC SECTION OF THE ROUTE: **/
  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  /** FADE IN SECTIONS  **/
  window.onscroll = function () {
    fadeInFunction();
  };

  function fadeInFunction() {
    const historySection = document.querySelector(".historySection");
    const whatisSection = document.querySelector(".whatisSection");
    const characteristicsSection = document.querySelector(".characteristics");
    const advantagesSection = document.querySelector(".advantages");

    let historySection_distance =
      window.innerHeight - historySection.getBoundingClientRect().top;
    if (historySection_distance >= 100) {
      historySection.classList.add("effect-fade");
    }

    let whatisSection_distance =
      window.innerHeight - whatisSection.getBoundingClientRect().top;
    if (whatisSection_distance >= 100) {
      whatisSection.classList.add("effect-fade");
    }

    let characteristicsSection_distance =
      window.innerHeight - characteristicsSection.getBoundingClientRect().top;
    if (characteristicsSection_distance >= 100) {
      characteristicsSection.classList.add("effect-fade");
    }

    let advantagesSection_distance =
      window.innerHeight - advantagesSection.getBoundingClientRect().top;
    if (advantagesSection_distance >= 100) {
      advantagesSection.classList.add("effect-fade");
    }
  }
  return (
    <div className="faqroute-container">
      <section className="historySection">
        <a id="history">
          <History />
        </a>
      </section>

      <section className="whatisSection">
        <a id="whatis">
          <WhatIs />
        </a>
      </section>

      <section className="characteristics">
        <a id="characteristics">
          <Characteristic />
        </a>
      </section>

      <section className="advantages">
        <a id="advantages">
          <Advantages />
        </a>
      </section>
    </div>
  );
};

export default FAQRoute;
