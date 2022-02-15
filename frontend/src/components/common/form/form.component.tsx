import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./form.module.css";

interface IProps {
  isRegisterForm?: boolean;
}

const Form: React.FC<IProps> = ({ isRegisterForm }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isPasswordVisibleStyles = [styles.userIcon, styles.showPasswordIcon];
  return (
    <div className={styles.wrapper}>
      <form id="form" action="#" method="POST">
        <fieldset className={styles.fieldset}>
          <h1>{isRegisterForm ? "Registration" : "Login"}</h1>
          {isRegisterForm && (
            <>
              <div className={styles.inputContainer}>
                <FontAwesomeIcon className={styles.userIcon} icon={faUser} />
                <input
                  autoFocus
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className={styles.inputContainer}>
                <FontAwesomeIcon className={styles.userIcon} icon={faUser} />
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  placeholder="Last Name"
                  required
                />
              </div>
            </>
          )}
          <div className={styles.inputContainer}>
            <FontAwesomeIcon className={styles.userIcon} icon={faEnvelope} />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <FontAwesomeIcon className={styles.userIcon} icon={faLock} />
            <input
              type={`${isPasswordVisible ? "text" : "password"}`}
              name="password"
              id="password"
              placeholder="Password"
              required
            />
            {isPasswordVisible ? (
              <FontAwesomeIcon
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                className={isPasswordVisibleStyles.join(" ")}
                icon={faEye}
              />
            ) : (
              <FontAwesomeIcon
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                className={isPasswordVisibleStyles.join(" ")}
                icon={faEyeSlash}
              />
            )}
          </div>

          <button className={styles.button}>
            {isRegisterForm ? "Sign Up" : "Login"}
          </button>
          {!isRegisterForm && (
            <p>
              Dont have an account? Register
              <Link to={"/register"}> now</Link> !
            </p>
          )}
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
