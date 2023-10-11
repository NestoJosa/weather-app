import React, { useState } from "react";

const Form = ({ onSearchSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(input);
  };

  return (
    <div className="Form">
      <h2 id="aria-formLabel" className="mt-4">
        Search Form
      </h2>
      <form
        className="d-flex flex-column mt-3"
        onSubmit={handleSubmit}
        role="search"
        aria-label="Weather Search Form"
        aria-labelledby="aria-formLabel"
      >
        <label htmlFor="cityInput" className="form-label mt-2">
          Enter the name of a city:
        </label>
        <input
          className="form-control"
          id="cityInput"
          value={input}
          type="search"
          aria-label="Search for a city"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary mt-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
