import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SVG from "react-inlinesvg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./footer.module.css";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const [isScrollBtnVisible, setIsScrollBtnVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled > 300 ? setIsScrollBtnVisible(true) : setIsScrollBtnVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <div className={styles.footer}>
      <button
        title="Go to the top"
        onClick={scrollToTop}
        style={{ display: isScrollBtnVisible ? "inline" : "none" }}
        className={styles.scrollToTop}
      >
        <FontAwesomeIcon icon={faChevronUp} size="2x" />
      </button>
      <div onClick={() => navigate("/")} className={styles.logoContainer}>
        <SVG src="/images/logo.svg" className={styles.logo} />
        <span>Вкусно!</span>
      </div>
      <section className={styles.socialMedia}>
        <p>Copyright © 2022 All Rights Reserved by Ts.Tsekov.</p>
        <p>
          Social Media:
          <a
            href="https://www.facebook.com/HayGrouve/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
          </a>
        </p>
      </section>
    </div>
  );
};

export default Footer;
