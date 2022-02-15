import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./hero.module.css";

const Hero: React.FC = () => {
  const scrollIntoLive = () => {
    const liveElement = document
      .querySelector(".scrollTo")
      ?.getBoundingClientRect();
    window.scroll({ top: liveElement?.top! - 68, behavior: "smooth" });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.heroBg}>
        <div className={styles.heroContent}>
          <h1>From grandma's recipes!</h1>
          <button onClick={scrollIntoLive} className={styles.btn}>
            <FontAwesomeIcon className={styles.icon} icon={faUtensils} />
            Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
