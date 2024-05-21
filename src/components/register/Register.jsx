import React, { useState } from "react";

export const Register = () => {
  const [names, setNames] = useState("");
  const [lastNames, setLastNames] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      console.log("Nombres:", names);
      console.log("Apellidos:", lastNames);
      console.log("Correo Electrónico:", email);
      console.log("Contraseña:", password);
    } else {
      setPasswordsMatch(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[500px] m-4">
        <div className="bg-white p-10 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Regístrate</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="names"
                  className="block text-gray-700 font-semibold"
                >
                  Nombres
                </label>
                <input
                  type="names"
                  id="names"
                  value={names}
                  onChange={(e) => setNames(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastnames"
                  className="block text-gray-700 font-semibold"
                >
                  Apellidos
                </label>
                <input
                  type="lastnames"
                  id="lastnames"
                  value={lastNames}
                  onChange={(e) => setLastNames(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-semibold"
              >
                Repetir Contraseña
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            {!passwordsMatch && (
              <div className="text-red-500 text-sm mb-4">
                Las contraseñas no coinciden.
              </div>
            )}
            <div className="flex justify-center">
              <button
                type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
              >
                Registrarme
              </button>
            </div>
            <div class="mt-2 mb-2 text-center">
              <a className="text-blue-700" href="#">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
