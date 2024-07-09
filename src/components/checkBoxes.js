import React, { useState } from "react";
import "../styles/CheckboxList.css";

const Checkboxes = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, checked: false },
    { id: 2, checked: false },
    { id: 3, checked: true },
    { id: 4, checked: true },
    { id: 5, checked: true },
    { id: 6, checked: false },
    { id: 7, checked: true },
    { id: 8, checked: false },
  ]);

  const handleCheckboxChange = (id) => {
    setCheckboxes(
      checkboxes.map((cb) =>
        cb.id === id ? { ...cb, checked: !cb.checked } : cb
      )
    );
  };

  return (
    <div className="checkbox-list">
      {checkboxes.map((cb) => (
        <div className="checkbox-div">
          {" "}
          <label key={cb.id} className="checkbox-container">
            All pages
            <input
              type="checkbox"
              checked={cb.checked}
              onChange={() => handleCheckboxChange(cb.id)}
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default Checkboxes;
