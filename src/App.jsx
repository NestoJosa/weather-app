import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Form from "./Form";
import Weather from "./Weather";
import ThemeSwitcher from "./ThemeSwitcher";
import "./styles.scss";

const App = () => {
  const [city, setCity] = useState("");
  const [isDark, setIsDark] = useState(true);

  const handleSearchSubmit = (input) => {
    setCity(input);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="Wrapper container-fluid">
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
            </div>
          </div>

          <div className="row text-center mt-5 pt-5">
            <div className="col">
              <h1 className="Title">Weather App</h1>
            </div>
          </div>

          <div className="row text-center justify-content-center">
            <div className="col-8 col-md-2">
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
