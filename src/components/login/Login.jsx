import React, { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Contraseña:", password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[500px] m-4">
        <div className="bg-white p-10 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Inicio de Sesión
          </h2>
          <form onSubmit={handleSubmit}>
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
            <div className="flex justify-center">
              <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2">
                Iniciar Sesión
              </button>
            </div>
            <div class="mt-2 mb-2 text-center">
              <a className="text-blue-700" href="#">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <hr></hr>
            <div class="mt-3 mb-3 flex justify-center">
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-[#079F73] focus:ring-offset-2"
              >
                <a href="/signup">
                  Regístrate
                </a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
