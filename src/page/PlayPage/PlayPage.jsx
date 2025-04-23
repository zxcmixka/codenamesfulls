import React from "react";
import { Link } from "react-router-dom";
import style from "./PlayPage.module.css"

export const PlayPage = () => {
    return(
        <div>
            <div>
                <Link to={"/codenames"} className={style.playButton}> <h1>play</h1> </Link>
            </div>
        </div>
    );
};