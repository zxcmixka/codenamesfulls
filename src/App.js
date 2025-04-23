import React from "react";
import { Route, Routes } from "react-router-dom";
import { HeaderComponent } from "./componets/HeaderComponent";
import { MainPage } from "./page/MainPage/MainPage.jsx";
import { PlayPage } from "./page/PlayPage/PlayPage.jsx";
import './App.css';

function App() {
  return (
    <div>
      <HeaderComponent/>

      <Routes>
        <Route path="/codenames" element={<MainPage/>}/>
        <Route path="/" element={<PlayPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
