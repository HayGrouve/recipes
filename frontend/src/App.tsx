import { useEffect, useState } from "react";
import Navbar from "./components/common/navbar/navbar.component";
import { Route, Routes } from "react-router";
import items from "./data/data";
import Error404 from "./pages/404/error404.component";
import Footer from "./components/common/footer/footer.component";
import { IRecipe } from "./models/recipe.model";
import AppContextProvider from "./utils/combineContextProviders";
import RecipesProvider from "./contexts/recipeContext";
import Landing from "./pages/landing/landing.component";
import Recipe from "./pages/recipe/recipe.component";
import Register from "./pages/register/register.component";
import Login from "./pages/login/login.component";

function App() {
  const [menuItems, setMenuItems] = useState<Array<IRecipe>>([]);
  const [filteredMenuItems, setFilteredMenuItems] =
    useState<Array<IRecipe>>(items);
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
      <AppContextProvider providers={[RecipesProvider]}>
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
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </AppContextProvider>
    </div>
  );
}

export default App;
