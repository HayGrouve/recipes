import { useEffect, useState } from "react";
import Categories from "./components/categories/Categories.component";
import Menu from "./components/menu/Menu.component";
import Navbar from "./components/navbar/Navbar.component";
import { Route, Routes } from "react-router";
import items from "./data/data";
import { recipe } from "./types/types";

function App() {
  const [menuItems, setMenuItems] = useState<Array<recipe>>([]);
  const [filteredMenuItems, setFilteredMenuItems] =
    useState<Array<recipe>>(items);
  const [categories, setCategories] = useState<Array<string>>([]);

  const filterItems = (category: string) => {
    if (category === "all") {
      setFilteredMenuItems(items);
      return;
    }
    const newItems = menuItems.filter((item) => item.category === category);
    setFilteredMenuItems(newItems);
  };

  useEffect(() => {
    setCategories(["all", ...new Set(items.map((item) => item.category))]);
    setMenuItems(items);
  }, []);

  return (
    <main>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Categories categories={categories} filterItems={filterItems} />
              <Menu items={filteredMenuItems} />
            </>
          }
        />
        <Route path="/special" element={<>special</>} />
        <Route path="*" element={<>Error 404!</>} />
      </Routes>
    </main>
  );
}

export default App;
