import React, { useEffect, useRef, useState } from "react";
import style from './GameLogic.module.css'



  export const GameLogic = () =>{
    const [words, setWords] = useState([]);
    const [randomWords, setRandomWords] = useState([]);
    const [team, setTeam] = useState(null);
    const [role, setRole] = useState(null);
    const [startGame, setStartGame] = useState(false);

//timer

const [time, setTime] = useState(120);
const [timerRunning, setTymerRunning] = useState(false);
const [timeLimit, setTimeLimit] = useState(120);
const timerRef = useRef(null);

// WORDS AND RANDOM GENERATION

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


    return (
      <div className={style.gameContainer}>
        <div className={style.redTeam}>
          <button 
            className={`${style.teambutton} ${team === 'red' && role === 'spymaster' ? style.active : ''}`}
            onClick={() => {
              setTeam('red');
              setRole('spymaster');
              if (randomWords.length === 0) getRandomWords();
            }}
          >
            Become master
          </button>
          <button 
            className={`${style.teambutton} ${team === 'red' && role === 'operative' ? style.active : ''}`}
            onClick={() => {
              setTeam('red');
              setRole('operative');
              if (randomWords.length === 0) getRandomWords();
            }}
          >
            Join team
          </button>
        </div>
    
        <div className={style.gameArea}>
          <button 
            onClick={getRandomWords}
            className={style.startButton}
          >
            {randomWords.length ? 'Перезапуск игры' : 'Начать игру'}
          </button>
          
          <div className={style.board}>
            {randomWords.map((item, index) => (
              <div 
                key={index}
                className={`${style.card} ${
                  role === 'spymaster' ? style[item.role] : style.card
                } ${
                  item.revealed ? style.revealed : ''
                }`}
              >
                {item.word}
              </div>
            ))}
          </div>
        </div>

        <div className={style.blueTeam}>
          <button 
            className={`${style.teambutton} ${team === 'blue' && role === 'spymaster' ? style.active : ''}`}
            onClick={() => {
              setTeam('blue');
              setRole('spymaster');
              if (randomWords.length === 0) getRandomWords();
            }}
          >
            Become master
          </button>
          <button 
            className={`${style.teambutton} ${team === 'blue' && role === 'operative' ? style.active : ''}`}
            onClick={() => {
              setTeam('blue');
              setRole('operative');
              if (randomWords.length === 0) getRandomWords();
            }}
          >
            Join team
          </button>
        </div>
      </div>
    );
  }