export type Recipe = {
  id: number;
  title: string;
  description: string;
  ingredients: string;
  image?: string;
  category: string;
  userId: string;
  userName: string;
  userImg?: string;
  authorImg: string;
  createdAt: string;
};
