import { recipe } from "../../types/types";
import Categories from "../categories/Categories.component";
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
    <section className={styles.wrapper}>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={filteredMenuItems} />
    </section>
  );
};

export default Landing;
