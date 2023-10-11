import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Form from "./Form";
import Weather from "./Weather";

const App = () => {
  const [city, setCity] = useState("");

  const handleSearchSubmit = (input) => {
    setCity(input);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <Form onSearchSubmit={handleSearchSubmit} />
      {city ? (
        <div>
          <Weather city={city} />
        </div>
      ) : null}
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
