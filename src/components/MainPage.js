import React from "react";

const MainPage = ({ changeComponent }) => {
  console.log(changeComponent);

  return (
    <div className="mainPage">
      <div className="title">
        <div className="dot"></div>
        <h1>18</h1>
      </div>
      <div className="contents">
        <h4 onClick={() => changeComponent("Bars")}>BARS</h4>
        <h4 onClick={() => changeComponent("Cafes")}>CAFES</h4>
        <h4 onClick={() => changeComponent("Dining")}>DINING</h4>
        <h4 onClick={() => changeComponent("Hotels")}>HOTELS</h4>
        <h4 onClick={() => changeComponent("Museums")}>MUSEUMS</h4>
      </div>
    </div>
  );
};

export default MainPage;
