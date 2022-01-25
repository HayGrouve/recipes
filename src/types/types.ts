export type recipe = {
  id: number;
  title: string;
  img: string;
  category: string;
  ingredients: string;
  desc: string[];
};

export const recipeMock = {
  id: 1,
  title: "Title",
  img: "",
  category: "category",
  ingredients: "ingredients",
  desc: ["description1", "description1"],
};
