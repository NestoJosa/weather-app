import React, { useState } from "react";

const Form = ({ onSearchSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(input);
  };

  return (
    <div>
      <h2 id="aria-formLabel">Weather Search Form</h2>
      <form
        onSubmit={handleSubmit}
        role="search"
        aria-label="Weather Search Form"
        aria-labelledby="aria-formLabel"
      >
        <label htmlFor="cityInput">Enter the name of a city</label>
        <input
          id="cityInput"
          value={input}
          type="search"
          aria-label="Search for a city"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
