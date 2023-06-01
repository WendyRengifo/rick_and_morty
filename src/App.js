import "./App.css";
import React from "react";
// import Card from './components/Card.jsx';
import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import characters from "./data.js";

function App() {
  function searchHandler(e) {
    window.alert("Emulamos que se cierra la card");
  }

  function closeHandler() {
    window.alert("Emulamos que se cierra la card");
  }
  return (
    <div className="App">
      <SearchBar onSearch={searchHandler} />
      <Cards characters={characters} onClose={closeHandler} />
    </div>
  );
}

export default App;
