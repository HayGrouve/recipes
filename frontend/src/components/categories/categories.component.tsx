import React from "react";
import styles from "./categories.module.css";

interface IProps {
  categories: Array<string>;
  filterItems: (category: string) => void;
}

const Categories: React.FC<IProps> = ({ categories, filterItems }) => {
  return (
    <div className="container">
      <section className={styles.wrapper}>
        <h3>Filter:</h3>
        {categories
          .slice(0, 9)
          .sort()
          .map((category, index) => {
            return (
              <button
                type="button"
                key={index}
                onClick={() => filterItems(category)}
              >
                {category}
              </button>
            );
          })}
      </section>
    </div>
  );
};

export default Categories;
