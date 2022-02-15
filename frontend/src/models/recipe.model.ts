export interface IRecipe {
  id: number;
  title: string;
  img: string;
  category: string;
  ingredients: string;
  desc: string[];
}

export interface IRecipes {
  recipes: IRecipe[];
  isLoading: boolean;
}
