import React, { useState } from "react";
import "../styles/PagesFrame.css";

const PagesFrame = () => {
  const [checkedItems, setCheckedItems] = useState({
    allPages: false,
    pages: [false, false, false, false],
  });

  const [buttonClicked, setButtonClicked] = useState(false);

  const handleAllPagesChange = () => {
    const newCheckedState = !checkedItems.allPages;
    setCheckedItems({
      allPages: newCheckedState,
      pages: Array(checkedItems.pages.length).fill(newCheckedState),
    });
  };

  const handlePageChange = (index) => {
    const newPages = [...checkedItems.pages];
    newPages[index] = !newPages[index];
    setCheckedItems({ ...checkedItems, pages: newPages });
  };

  const handleButtonClick = () => {
    setButtonClicked(true);
    alert("Button clicked");
  };

  return (
    <div className="frame-list">
      <div className="frame-item">
        <label>All pages</label>
        <input
          type="checkbox"
          checked={checkedItems.allPages}
          onChange={handleAllPagesChange}
        />
      </div>
      <div className="separator" />
      {checkedItems.pages.map((checked, index) => (
        <div className="frame-item" key={index}>
          <label>Page {index + 1}</label>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => handlePageChange(index)}
          />
        </div>
      ))}
      <div className="separator" />
      <button
        className={`frameButton ${buttonClicked ? "clicked" : ""}`}
        onClick={handleButtonClick}
      >
        Done
      </button>
    </div>
  );
};

export default PagesFrame;
