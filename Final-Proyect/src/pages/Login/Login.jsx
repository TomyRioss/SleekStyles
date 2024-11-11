import React from 'react';
import LoginName from '../../components/Login/LoginName/LoginName';
import LoginPassword from '../../components/Login/LoginPassword/LoginPassword';
import styles from './Login.module.css';

const Login = () => {
  return (
    <form className={styles.loginForm}>
      <LoginName />
      <LoginPassword />
      <button> Iniciar Sesión </button>
    </form>
  );
};

export default Login;
