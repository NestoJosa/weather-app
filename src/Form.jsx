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
      <form onSubmit={handleSubmit} aria-labelledby="aria-formLabel">
        <label htmlFor="cityInput">
          Search for a city
          <input
            id="cityInput"
            value={input}
            type="text"
            aria-label="Search for a city"
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
