import React, { useState } from "react";
import "../styles/ListingCheckboxes.css";
const ListingCheckboxes = () => {
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
    <div className="listingCheckboxes-list">
      {checkboxes.map((cb) => (
        <input
          type="checkbox"
          checked={cb.checked}
          onChange={() => handleCheckboxChange(cb.id)}
        />
      ))}
    </div>
  );
};
export default ListingCheckboxes;
