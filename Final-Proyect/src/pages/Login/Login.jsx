import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [message, setMessage] = useState('');
  const [isValid, setValid] = useState(null);
  // Creamos estados para almacenar los distintos datos.

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    // Inicializamos auth y prevenimos que el formulario recargue la pagina al dar submit.

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Obtiene el usuario y sus datos.
      setValid(true);
    } catch (error) {
      setValid(false);
      console.log('Ocurrió un error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
            required
            className="w-full p-3 mb-4 border rounded-lg"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
            className="w-full p-3 mb-4 border rounded-lg"
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          >
            Iniciar sesión
          </button>
        </form>
        {isValid !== null &&
          (isValid === true ? (
            <p className="mt-2 text-center text-green-500">
              ¡Has iniciado sesión!
            </p>
          ) : (
            <p className="mt-2 text-center text-red-500">
              Credenciales inválidas.
            </p>
          ))}
      </div>
    </div>
  );
};

export default Login;
