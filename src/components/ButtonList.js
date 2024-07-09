import React, { useState } from "react";
import "../styles/ButtonList.css";

const ButtonList = () => {
  const [clickedButtons, setClickedButtons] = useState([false, false, false]);
  const handleClick = (index) => {
    const newClickedButtons = [...clickedButtons];
    newClickedButtons[index] = true;
    setClickedButtons(newClickedButtons);
    alert("Button clicked");
  };
  return (
    <div className="button-list">
      {clickedButtons.map((clicked, index) => (
        <button
          key={index}
          className={`button ${clicked ? "clicked" : ""}`}
          onClick={() => handleClick(index)}
        >
          Done
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
