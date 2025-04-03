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
          <a href="#" target="_blank">
            Paula Malimba {""}
          </a>
          and is{" "}
          <a href="#" target="_blank">
            open-sourced on GitHub {""}
          </a>
          and{" "}
          <a href="" target="_blank">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
