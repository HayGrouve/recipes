import { recipe } from "../../types/types";
import Categories from "../categories/Categories.component";
import Hero from "../hero/Hero.component";
import Menu from "../menu/Menu.component";
import styles from "./landing.module.css";

interface IProps {
  categories: Array<string>;
  filterItems: (category: string) => void;
  filteredMenuItems: recipe[];
}
const Landing: React.FC<IProps> = ({
  categories,
  filterItems,
  filteredMenuItems,
}) => {
  return (
    <section>
      <Hero />
      <div className={styles.menuLayout}>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={filteredMenuItems} />
      </div>
    </section>
  );
};

export default Landing;
