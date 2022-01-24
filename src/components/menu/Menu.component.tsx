import React, { useEffect, useState } from "react";
import { recipe } from "../../types/types";
import Recipe from "../recipe/recipe.component";
import styles from "./menu.module.css";

interface IProps {
  items: Array<recipe>;
}

const Menu: React.FC<IProps> = ({ items }) => {
  const [localItems, setLocalItems] = useState(items);
  const [showRecipe, setShowRecipe] = useState(false);

  let selectedCard = [styles.card];

  const onClick = (id: number) => {
    setLocalItems(localItems.filter((item) => item.id === id));
    setShowRecipe(true);
  };
  useEffect(() => {
    selectedCard.push(styles.selectedCard);
  }, [showRecipe]);

  useEffect(() => {
    setLocalItems(items);
    setShowRecipe(false);
  }, [items]);

  return (
    <div className="container">
      <section className={styles.wrapper}>
        {localItems.map((menuItem: recipe) => {
          const { id, title, img, ingredients, desc } = menuItem;
          return (
            <article
              key={id}
              className={selectedCard.join(" ")}
              onClick={() => onClick(id)}
            >
              <img src={img} alt={title} />
              <section className="container">
                <header>
                  <h3 className={styles.title}>{title}</h3>
                  <hr />
                </header>
                {showRecipe && <Recipe ingredients={ingredients} desc={desc} />}
              </section>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Menu;
