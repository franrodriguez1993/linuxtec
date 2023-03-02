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

  return (
    <div className="faqroute-container">
      <a id="history">
        <History />
      </a>

      <a id="whatis">
        <WhatIs />
      </a>

      <a id="characteristics">
        <Characteristic />
      </a>

      <a id="advantages">
        <Advantages />
      </a>
    </div>
  );
};

export default FAQRoute;
