import styles from "./footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <p>
        Copyright © {new Date().getFullYear()} All Rights Reserved by Ts.Tsekov.
      </p>
    </div>
  );
};

export default Footer;
