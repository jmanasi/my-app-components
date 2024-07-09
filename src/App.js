import React from "react";
import "./App.css";
import Checkboxes from "./components/checkBoxes";
import ButtonList from "./components/ButtonList";
import ListingCheckboxes from "./components/ListingCheckboxes";
import PagesFrame from "./components/PagesFrame";

function App() {
  return (
    <div className="App">
      <ButtonList />
      <ListingCheckboxes />
      <Checkboxes />
      <PagesFrame />
    </div>
  );
}

export default App;
