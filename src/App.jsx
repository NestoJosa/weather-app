import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Form from "./Form";
import Weather from "./Weather";
import "./styles.scss";

const App = () => {
  const [city, setCity] = useState("");

  const handleSearchSubmit = (input) => {
    setCity(input);
  };

  return (
    <div className="Wrapper container-fluid">
      <div className="row">
        <div className="col text-center">
          <div className="row mt-5 pt-5">
            <div className="col">
              <h1 className="Title">Weather App</h1>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col col-md-3">
              <Form onSearchSubmit={handleSearchSubmit} />
            </div>
          </div>

          {city ? (
            <div className="row">
              <div className="col">
                <Weather city={city} />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
