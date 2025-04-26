import React, { useEffect, useState } from "react";
import style from './GameLogic.module.css';
//         {words.map((word, index) => (
//     <h2 key={index}>{word}</h2>
// ))}

export const GameLogic = () => {

    const [words, setWords] = useState([]);

  useEffect(() => {
    fetch("/russian.txt")
      .then((response) => response.text())
      .then((text) => {
        const wordArray = text
          .split("\n")
          .map((word) => word.trim())
          .filter(Boolean);
        setWords(wordArray);
      });
  }, []);

console.log(words)

  return (
    <div>
      {words.map((word, index) => (
          <h2 key={index}>{word}</h2>
        ))}
    </div>
  );
};


