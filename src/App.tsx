import { useEffect, useState } from "react";
import Navbar from "./components/common/navbar/Navbar.component";
import { Route, Routes } from "react-router";
import items from "./data/data";
import Error404 from "./pages/404/Error404.component";
import Landing from "./pages/landing/Landing.component";
import Recipe from "./pages/recipe/Recipe.component";
import Footer from "./components/common/footer/Footer.component";
import { recipe } from "./models/recipe.model";
import AppContextProvider from "./utils/combineContextProviders";
import FootballFixturesProvider from "./contexts/footballFixturesContext";

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
    <div className="app">
      //TODO change to div but check styles
      <AppContextProvider providers={[FootballFixturesProvider]}>
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
      </AppContextProvider>
    </div>
  );
}

export default App;
