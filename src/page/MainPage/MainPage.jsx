import React, { useState, useRef, useEffect } from "react";
import style from "./MainPage.module.css"
import gear from "../../componets/images/gear.png"
import start from "../../componets/images/play.png"

export const MainPage = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={style.mainDiv}>
      <div className={style.redTeam}></div>
      <div className={style.blueTeam}></div>

      <div className={style.gear} ref={menuRef}>
        <button className={style.gearbutton} onClick={toggleMenu}>
          <img className={style.gearpng} src={gear} alt="gear" />
        </button>

        {isMenuVisible && (
          <div className={style.gearmenu}>
            <button className={style.buttonmenu}>
              <img className={style.start} src={start} alt="start" />
            </button>
            <button className={style.buttonmenu}></button>
            <button className={style.buttonmenu}></button>
          </div>
        )}
      </div>
    </div>
  );
};
