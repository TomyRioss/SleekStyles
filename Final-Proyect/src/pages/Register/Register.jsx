import React from 'react';
import RegisterName from '../../components/Register/RegisterName/RegisterName';
import RegisterEmail from '../../components/Register/RegisterEmail/RegisterEmail';
import RegisterPassword from '../../components/Register/RegisterPassword/RegisterPassword';
import styles from './Register.module.css';

const Register = () => {
  return (
    <div className={styles.formContainer}>
      <form>
        <RegisterName />
        <RegisterEmail />
        <RegisterPassword />
        <button id="registerBtn">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
