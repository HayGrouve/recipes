import { faHome, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import SVG from "react-inlinesvg";
import styles from "./navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  const onClick = (path: string) => {
    navigate(path);
  };

  return (
    <section className={styles.navPosition}>
      <div>
        <nav className={styles.wrapper}>
          <div onClick={() => onClick("/")} className={styles.logoContainer}>
            <SVG src="/images/logo.svg" className={styles.logo} />
            <span>Вкусно!</span>
          </div>
          <ul className={styles.list}>
            <li onClick={() => onClick("/")}>
              <FontAwesomeIcon className={styles.icon} icon={faHome} />
              Home
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
