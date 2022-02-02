import Categories from "../../components/categories/categories.component";
import Hero from "../../components/hero/hero.component";
import Menu from "../../components/menu/menu.component";
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
  // const { test } = useContext(FootballFixturesContext);
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
