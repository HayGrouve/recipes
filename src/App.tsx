import { useState } from "react";
import Categories from "./components/categories/Categories.component";
import Menu from "./components/menu/Menu.component";
import items from "./data/data";
import { recipe } from "./types/types";

function App() {
  const [menuItems, setMenuItems] = useState<Array<recipe>>(items);
  const [categories, setCategories] = useState<Array<string>>([
    "all",
    ...new Set(items.map((item) => item.category)),
  ]);

  const filterItems = (category: string) => {
    console.log(
      "🚀 ~ file: App.tsx ~ line 16 ~ filterItems ~ category",
      category
    );
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = menuItems.filter((item) => item.category === category);

    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
