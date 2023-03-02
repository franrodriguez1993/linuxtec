import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DebianRoute from "./routes/DebianRoute";
import RpmRoute from "./routes/RpmRoute";
import ArchRoute from "./routes/ArchRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/debian" element={<DebianRoute />} />
          <Route path="/rpm" element={<RpmRoute />} />
          <Route path="/arch" element={<ArchRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
