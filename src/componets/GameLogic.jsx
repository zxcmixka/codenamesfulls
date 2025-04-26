import React, { useEffect, useState } from "react";
import style from './GameLogic.module.css';
import { Random } from "./randomW";
//         {words.map((word, index) => (
//     <h2 key={index}>{word}</h2>
// ))}

export const GameLogic = () => {
    const [score, setScore] = useState();


  return (
    <div>
      <Random/>
    </div>
  );
};


