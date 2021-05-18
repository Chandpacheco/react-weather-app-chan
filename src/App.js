import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container-one">
        <div className="container-two">
          <Weather defaultCity="Pikeville" />
        </div>
        <footer>
          This page was built by{" "}
          <a
            href="https://www.linkedin.com/in/chandlerpacheco/"
            target="_blank"
            rel="noreferrer"
          >
            Chandler Pacheco
          </a>
        </footer>
      </div>
    </div>
  );
}
