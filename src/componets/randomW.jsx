import React, { useEffect, useState } from "react";
import style from './GameLogic.module.css'



  export const Random = () =>{
    const [words, setWords] = useState([]);
    const [randomWords, setRandomWords] = useState([]);

    useEffect(() => {
      fetch("/russian.txt")
        .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch words");
          return response.text();
        })
        .then((text) => {
          const wordArray = text
            .split("\n")
            .map((word) => word.trim())
            .filter(Boolean);
          setWords(wordArray);
        })
        .catch((error) => console.error("Error loading words:", error));
    }, []);

    const getRandomWords = () => {
      if (words.length === 0) return;
      
      const shuffled = [...words].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 25);

      const roles = [
        ...Array(8).fill('cardblue'),
        ...Array(9).fill('cardred'),
        ...Array(7).fill('card'),
        ...Array(1).fill('cardblack')
      ].sort(() => 0.5 - Math.random())
  
      const wordsWithRoles = selected.map((word, index) => ({
        word,
        role: roles[index]
      }))
      setRandomWords(wordsWithRoles);
    };

    return(
        <div>  
        <button onClick={getRandomWords}>Начать игру</button>
      <div className={style.board}>
        {randomWords.map((item, index) => (
          <div
            key={index}
            className={`${style.card} ${style[item.role]} `}
            > 
            {item.word}
          </div>
        ))}
      </div>
      </div>
      
    );   
  }