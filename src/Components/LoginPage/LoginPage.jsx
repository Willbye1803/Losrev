import React, { useState } from 'react';
import LogoPrincipal from "../LoginPage/logoHero.png";


const LoginPage = () => {
  const [condicionesAceptadas, setCondicionesAceptadas] = useState(false);

  const cambiarCondiciones = (event) => {
    setCondicionesAceptadas(event.target.checked);
    console.log('Condiciones aceptadas:', event.target.checked);
  };

  return (
    <div className="bg-red-800 min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-md w-160">
        <div className="flex justify-center mb-8">
          <img src={LogoPrincipal} alt="Logo" className="h-28" />
        </div>
        <h1 className="text-xl font-semibold mb-6 text-center">Iniciar Sesión</h1>
        <div className="text-center">
          <div className="mb-4">
            <input
              type="text"
              className="login-field  p-2 rounded w-full" 
              placeholder="Nombre de usuario "
              id="login-name"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="login-field p-2 rounded w-full"
              placeholder="Contraseña"
              id="login-pass"
            />
          </div>
          <button className="btn btn-primary btn-large btn-block mb-4 bg-red-800 border-2 border-transparent
           text-white text-base font-bold py-2 px-4 transition duration-300 ease-in-out
            hover:bg-red-600 focus:outline-none focus:shadow-outline w-64 rounded-md"> {/* Aquí añadimos la clase 'rounded-md' para hacer el botón ligeramente redondeado */}
            Ingresar
          </button>
          <label htmlFor="condiciones" className="block mb-4">
            <input
              type="checkbox"
              id="condiciones"
              name="condiciones"
              className="mr-2"
              onChange={cambiarCondiciones}
            />
            Estoy de acuerdo con los <a href="#" className="underline">términos y condiciones</a>.
          </label>
          <a href="#" className="text-sm text-gray-700 block mb-4">
            ¿Perdiste tu contraseña?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
