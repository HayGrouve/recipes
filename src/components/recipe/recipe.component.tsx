import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipe, recipeMock } from "../../types/types";
import styles from "./recipe.module.css";

interface IProps {
  items: Array<recipe>;
}

const Recipe: React.FC<IProps> = ({ items }) => {
  const [recipe, setRecipe] = useState<recipe>(recipeMock);
  const { title, img, ingredients, desc } = recipe;
  const [localImage, setLocalImage] = useState(img);
  const navigate = useNavigate();
  const { id } = useParams();

  const wrapperStyles = ["container", styles.wrapper];

  const handleImgError = () => {
    setLocalImage("/images/recipe.jpg");
  };

  useEffect(() => {
    const localRecipe = items.filter((item) => item.id === parseInt(id!))[0];
    if (!localRecipe) navigate("/");
    setRecipe(localRecipe);
  }, [id, items, navigate]);

  return (
    <section className={wrapperStyles.join(" ")}>
      <section className={styles.leftSection}>
        <img
          onError={handleImgError}
          src={localImage || img}
          alt={title}
          className={styles.img}
        />
        <div className={styles.imageTitle}>
          <h3>{title}</h3>
        </div>
      </section>
      <section className={styles.rightSection}>
        <div>
          <h4 className={styles.title}>Продукти:</h4>
          <ol>
            {ingredients.split("\n").map((i, key) => {
              return (
                <li className={styles.listItem} key={key}>
                  {i}
                </li>
              );
            })}
          </ol>
        </div>
        <div>
          <h4 className={styles.title}>Начин на приготвяне:</h4>
          <article className={styles.descContainer}>
            {desc.map((i, key) => {
              return <p key={key}>{i}</p>;
            })}
          </article>
        </div>
        <button
          title="Go Back"
          className={styles.btn}
          onClick={() => navigate("/")}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </section>
    </section>
  );
};

export default Recipe;
