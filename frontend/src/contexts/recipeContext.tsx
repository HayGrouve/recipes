import React, { createContext, useState, useEffect, useCallback } from "react";
import { IRecipe, IRecipes } from "../models/recipe.model";

const contextDefaultValues: IRecipes = {
  recipes: [],
  isLoading: false,
};

export const RecipesContext = createContext<IRecipes>(contextDefaultValues);

const RecipesProvider: React.FC = ({ children }) => {
  const [recipes, setRecipes] = useState<IRecipe[]>(
    contextDefaultValues.recipes
  );
  const [isLoading, setIsLoading] = useState(contextDefaultValues.isLoading);

  const requestGetRecipes = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch("http://localhost:5000/api/recipes");
    const recipes = await response.json();
    setIsLoading(false);
    setRecipes(recipes);
  }, []);

  useEffect(() => {
    requestGetRecipes();
  }, [requestGetRecipes]);

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        isLoading,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
