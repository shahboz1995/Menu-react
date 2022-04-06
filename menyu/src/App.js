import React, { useState } from "react";

import itmes from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

import "./App.css";
const allCategories = ["all", ...new Set(itmes.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(itmes);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(itmes);
      return;
    }
    const newItems = itmes.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu </h2>
          <div className="underlien"></div>
        </div>
        <Categories allCategories={allCategories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
