import React from "react";
import { recipe } from "../../types/types";
import styles from "./recipe.module.css";

interface IProps {
  ingredients: string;
  desc: string[];
}

const Recipe: React.FC<IProps> = ({ ingredients, desc }) => {
  return (
    <section>
      <h4 className={styles.title}>Продукти:</h4>
      <ol>
        {ingredients.split("\n").map((i, key) => {
          return <li key={key}>{i}</li>;
        })}
      </ol>
      <h4 className={styles.title}>Начин на приготвяне:</h4>
      <article className={styles.descContainer}>
        {desc.map((i, key) => {
          return <p key={key}>{i}</p>;
        })}
      </article>
    </section>
  );
};

export default Recipe;
