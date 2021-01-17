import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "🍎": "Red Apple",
  "🥭": "Mango",
  "🍇": "Grapes",
  "🥥": "Coconut",
  "🍍": "Pineapple",
  "🍒": "Cherry",
  "🍊": "Orange"
};
var emojiarray = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setmeaning] = useState(" ");

  function interpreter(event) {
    var userinput = event.target.value;
    meaning = emojiDictionary[userinput];
    if (meaning === undefined) meaning = "Not present";
    setmeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    meaning = emojiDictionary[emoji];
    if (meaning === undefined) meaning = "Not present";
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={interpreter} />
      <div>{meaning}</div>
      <h2>Click on the emoji to find its meaning</h2>
      {emojiarray.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", cursor: "Pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
