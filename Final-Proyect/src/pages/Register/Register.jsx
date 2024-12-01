import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, collection } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // Se crean estados simples para establecer datos.
  const [message, setMessage] = useState({ text: '', color: '' });
  // Se crea un estado que será lo que incluya el mensaje de error.

  const allowedDomains = [
    '@gmail.com',
    '@yahoo.com',
    '@hotmail.com',
    '@outlook.com',
    '@aol.com',
    '@icloud.com',
    '@mail.com',
    '@protonmail.com',
    '@zoho.com',
    '@yandex.com',
    '@gmx.com',
    '@me.com',
    '@mac.com',
    '@live.com',
    '@msn.com',
    '@comcast.net',
    '@verizon.net',
    '@att.net',
    '@sbcglobal.net',
    '@bellsouth.net',
    '@earthlink.net',
    '@cox.net',
    '@charter.net',
  ];

  const getEmailProvider = (email) => {
    const domain = email.substring(email.lastIndexOf('@'));
    return domain;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    // Se inicializa auth de firebase y se previene el comportamiento predeterminado de submit.

    const emailDomain = getEmailProvider(email);

    if (!allowedDomains.includes(emailDomain)) {
      setMessage({
        text: 'Dominio de email no permitido.',
        color: 'text-red-500',
      });
      return;
    }

    if (password !== confirmPassword) {
      setMessage({
        text: 'Las contraseñas no coinciden.',
        color: 'text-red-500',
      });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      //Se crea el user en la auth db de firebase.

      await setDoc(doc(collection(db, 'users'), user.uid), {
        firstName,
        lastName,
        email: user.email,
        createdAt: new Date(),
      });
      // también en una colección de firestore.s

      setMessage({
        text: '¡Registrado exitosamente!',
        color: 'text-green-500',
      });
    } catch (error) {
      console.log('Error al registrarse:', error);
      let errorMessage;
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = '¡Correo electrónico ya en uso, inicia sesión!';
          break;
        case 'auth/invalid-email':
          errorMessage = 'El correo electrónico no es válido.';
          break;
        case 'auth/weak-password':
          errorMessage =
            'La contraseña es muy débil. Debe tener al menos 6 caracteres.';
          break;
        default:
          errorMessage = 'Error al registrarse. Inténtelo de nuevo más tarde.';
      }
      setMessage({
        text: errorMessage,
        color: 'text-red-500',
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Nombre"
            required
            className="w-full p-3 mb-4 border rounded-lg"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Apellido"
            required
            className="w-full p-3 mb-4 border rounded-lg"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
            required
            className="w-full p-3 mb-4 border rounded-lg"
          />
          <div className="relative w-full mb-4">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              required
              className="w-full p-3 border rounded-lg pr-10"
            />
            {/* Contraseña, sí se toca el ojo, este se cierra y cambia el tipo a texto. */}
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {/** Boton para cambiar el tipo al contrario de showPassword cada vez que se aprieta el ojo. */}
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
          <div className="relative w-full mb-4">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirmar Contraseña"
              required
              className="w-full p-3 border rounded-lg pr-10"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {/** Exactamente mismna lógica. */}
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          >
            Registrar
          </button>
        </form>
        {message.text && (
          <p className={`mt-4 text-center ${message.color}`}>{message.text}</p>
        )}
      </div>
    </div>
  );
};

export default Register;
