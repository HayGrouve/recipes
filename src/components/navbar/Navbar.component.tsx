import {
  faUser,
  faUserPlus,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  const wrapperStyles = [styles.wrapper, "container"];

  const navigate = useNavigate();

  const onClick = (path: string) => {
    navigate(path);
  };

  return (
    <section>
      <div className={styles.background}>
        <nav className={wrapperStyles.join(" ")}>
          <img
            title="Go Home"
            onClick={() => onClick("/")}
            className={styles.logo}
            src="/images/logo.jpg"
            alt="Logo"
          />
          <ul className={styles.list}>
            <li onClick={() => onClick("/")}>
              <FontAwesomeIcon className={styles.icon} icon={faUtensils} />
              Recipes
            </li>
          </ul>
          <ul className={styles.list}>
            <li onClick={() => onClick("/login")}>
              <FontAwesomeIcon className={styles.icon} icon={faUser} />
              Login
            </li>
            <li onClick={() => onClick("/register")}>
              <FontAwesomeIcon className={styles.icon} icon={faUserPlus} />
              Sign up
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
