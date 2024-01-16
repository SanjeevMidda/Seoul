import React from "react";

const Info = ({ title, description, changeComponent }) => {
  console.log(description);

  return (
    <div className="info">
      <h5 onClick={changeComponent}>{"< BACK"}</h5>

      <h1>{title}</h1>

      {/* {description.map((item, number) => {
        return (
          <div id="allContent">
            <span>
              <h3>{number}</h3>
            </span>
            <h3>{item}</h3>
          </div>
        );
      })} */}
    </div>
  );
};

export default Info;
