import React from "react";
import "./App.css";
import { LeftSideBar } from "./composants/LetftSideBar/index";
import { MainPage } from "./composants/MainPage";

function App() {
  return (
    <div className="d-flex vh-100 justify-content-center">
      <div className="App align-self-center col-md-8 col-12 pb-3">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
