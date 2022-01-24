import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  const wrapperStyles = [styles.wrapper, "container"];
  return (
    <section>
      <nav className={wrapperStyles.join(" ")}>
        <p>
          <Link to="/special" className={styles.navItems}>
            Logo
          </Link>
        </p>
        <ul className={styles.primaryList}>
          <li>
            <Link to="/" className={styles.navItems}>
              Recipes
            </Link>
          </li>
        </ul>
        <ul className={styles.secondaryList}>
          <li>
            <Link to="/login" className={styles.navItems}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className={styles.navItems}>
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
