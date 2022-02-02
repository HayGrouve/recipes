import Categories from "../../components/categories/Categories.component";
import Hero from "../../components/hero/Hero.component";
import Menu from "../../components/menu/Menu.component";
import { recipe } from "../../models/recipe.model";
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
