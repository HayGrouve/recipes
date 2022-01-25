import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar.component";
import { Route, Routes } from "react-router";
import items from "./data/data";
import { recipe } from "./types/types";
import Error404 from "./components/404/Error404.component";
import Landing from "./components/landing/Landing.component";
import Recipe from "./components/recipe/Recipe.component";
import Footer from "./components/footer/Footer.component";

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
            <Landing
              categories={categories}
              filterItems={filterItems}
              filteredMenuItems={filteredMenuItems}
            />
          }
        />
        <Route path="/recipe/:id" element={<Recipe items={items} />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
