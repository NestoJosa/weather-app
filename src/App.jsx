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
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col col-auto text-center">
          <h1>Weather App</h1>
          <Form onSearchSubmit={handleSearchSubmit} />
          {city ? (
            <div>
              <Weather city={city} />
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
