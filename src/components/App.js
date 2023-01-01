import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
import Filter from "./Filter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function darkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div>
        <Header onDarkModeClick={darkModeClick} mode={isDarkMode} />
        <ShoppingList items={itemData} />
    </div>

  );
}

export default App;
