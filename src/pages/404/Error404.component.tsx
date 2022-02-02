import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./error404.module.css";

const Error404: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <section className={styles.page_404}>
        <div className={styles.textCenter}>
          <div>
            <div>
              <div className={styles.four_zero_four_bg}>
                <h1 className={styles.error404}>404</h1>
              </div>

              <div className={styles.contant_box_404}>
                <h3>Look like you're lost</h3>

                <p>the page you are looking for is not available!</p>
                <button className={styles.btn} onClick={() => navigate("/")}>
                  <FontAwesomeIcon className={styles.icon} icon={faHome} />
                  Go Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error404;
