import React, { useState } from "react";
import { ColorItem } from "./ColorItem";
import Values from "values.js";
import './App.css';

function App() {
  const [color, setColor] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const colors = new Values(color).all(10);
    setList(colors);
  }
  const handleColor = (event) => {
    setColor(event.target.value);
  }
  return (
    <React.Fragment>
      <section className="data">
        <h1>Color Generator App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={handleColor}
            placeholder="#03a9f4"
          />
          <button type="submit">
            Submit
          </button>
        </form>
      </section>
      <ColorItem list={list} />
    </React.Fragment>

  );
}

export default App;
