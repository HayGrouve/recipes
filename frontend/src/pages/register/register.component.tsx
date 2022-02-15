import React from "react";
import Form from "../../components/common/form/form.component";
import styles from "./register.module.css";

const Register: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Form isRegisterForm={true} />
    </div>
  );
};

export default Register;
