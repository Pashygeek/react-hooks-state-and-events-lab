import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [appClass, setAppClass] = useState("App light");
  
  const handleAppChange = () => {
    const newAppClass = appClass === "App light" ? "App dark" : "App light";
    setAppClass(newAppClass);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleAppChange}>Dark</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
