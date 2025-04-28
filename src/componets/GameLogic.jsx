import React, { useEffect, useState } from "react";
import style from './GameLogic.module.css'



  export const GameLogic = () =>{
    const [words, setWords] = useState([]);
    const [randomWords, setRandomWords] = useState([]);
    const [team, setTeam] = useState(null);
    const [role, setRole] = useState(null);

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

// TEAM AND ROLE

    const teamSelect = (team) => {
      setTeam(team);
      setRole(null);
    };
  
    const roleSelect = (role) => {
      setRole(role);
    };
  
    const confirmSelection = () => {
      if (team && role) {
        getRandomWords();
      }
    };

    return(
        <div></div>
    );   
  }