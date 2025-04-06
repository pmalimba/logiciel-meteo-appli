import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="The Hague" />
        <footer>
          This project was coded by {""}
          <a
            href="https://my-ownportfolio-project.netlify.app"
            rel="noreferrer"
          >
            Paula Malimba {""}
          </a>
          and is{" "}
          <a
            href="https://github.com/pmalimba/logiciel-meteo-appli"
            rel="noreferrer"
            target="_blank"
          >
            open-sourced on GitHub {""}
          </a>
          and is{" "}
        </footer>
      </div>
    </div>
  );
}
