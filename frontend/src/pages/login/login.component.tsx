import React from "react";
import Form from "../../components/common/form/form.component";
import styles from "./login.module.css";

const Login: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Form />
    </div>
  );
};

export default Login;
