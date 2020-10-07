import React, { useState } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [bad, setBad] = useState([]);
  const [search, setSearch] = useState("");

  const click = async () => {
    const result = await axios(
      `https://cors-anywhere.herokuapp.com/https://www.breakingbadapi.com/api/characters`
    );

    console.log(result.data);
    setBad(result.data);
  };

  return (
    <div className="App">
      <h1>Breaking Bad </h1>

      <input
        className="search"
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
      />
      <button className="btn" onClick={click}>
        Search
      </button>

      <ul>
        <div className="info">
          {bad.map((value) => (
            <li key={value.char_id}>
              <h2>{value.name}</h2>
              <p>{value.birthday}</p>
              <img className="image" src={value.img} alt={value.name} />
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
