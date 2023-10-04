import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Form from "./Form";

const App = () => {
  const [city, setCity] = useState("");

  const handleSearchSubmit = (input) => {
    setCity(input);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <Form onSearchSubmit={handleSearchSubmit} />
      <div>
        <h2>Weather for {city}</h2>
        {/* Add weather component or data fetching logic here */}
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
