import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { recipe } from "../../models/recipe.model";
import styles from "./menu.module.css";

interface IProps {
  items: Array<recipe>;
}

const Menu: React.FC<IProps> = ({ items }) => {
  const [localItems, setLocalItems] = useState(items);

  const navigate = useNavigate();
  const articleStyles = [styles.wrapper];
  const wrapperStyles = [styles.layoutContainer, "scrollTo"];

  const onClick = (id: number) => {
    navigate(`/recipe/${id}`);
  };

  switch (items.length) {
    case 3:
      articleStyles.push(styles.responsiveCard3);
      break;
    case 2:
      articleStyles.push(styles.responsiveCard2);
      break;
    case 1:
      articleStyles.push(styles.responsiveCard1);
      break;
  }

  useEffect(() => {
    setLocalItems(items);
  }, [items]);

  return (
    <div className={wrapperStyles.join(" ")}>
      <section className={articleStyles.join(" ")}>
        {localItems.map((menuItem: recipe) => {
          const { id, title, img } = menuItem;
          return (
            <article
              key={id}
              className={styles.card}
              onClick={() => onClick(id)}
            >
              <img className={styles.image} src={img} alt={title} />
              <section className="container">
                <header>
                  <h3 className={styles.title}>{title}</h3>
                  <hr />
                </header>
              </section>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Menu;
