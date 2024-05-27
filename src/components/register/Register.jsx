import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/thunks/authThunks";

export const Register = () => {
  const [userName, setUserName] = useState("");
  const [userLastNames, setUserLastNames] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  //redux states
  const {loading, error, isAuthenticated} = useSelector((state) => state.register);
  const [isClose, setIsClose] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setIsClose(true);
    }
  }, [error]);

  useEffect(() => {
    if (isClose) {
      setPasswordsMatch(true);
    }
  }, [isClose]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard/inicio");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (event) => {
    const userFirstName = userName.split(" ")[0];
    const userMotherLastName = userLastNames.split(" ")[1];
    const userLastName = userLastNames.split(" ")[0];
    const imageData = `https://ui-avatars.com/api/?name=${userFirstName}+${userLastName}&background=c7d2fe&color=3730a3&bold=true`
    event.preventDefault();
    if (userPassword === confirmPassword) {
      let userCredentials = {
        userName,
        userMotherLastName,
        userLastName,
        userEmail,
        userPassword,
        imageData,
      };
      dispatch(registerUser(userCredentials));
    } else {
      setPasswordsMatch(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#E3F6E5]">
      <div className="w-[500px] m-4">
        <div className="bg-white p-10 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Regístrate</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="userName"
                  className="block text-gray-700 font-semibold"
                >
                  Nombres
                </label>
                <input
                  type="userName"
                  id="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
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
                  value={userLastNames}
                  onChange={(e) => setUserLastNames(e.target.value)}
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
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
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
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
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

            <div className="flex justify-center">
              <button
                type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
              >
                {loading ? "Cargando..." : "Registrarse"}
              </button>
            </div>
            {error && isClose || !passwordsMatch && (
              <div
                id="alert-2"
                class="mt-[20px] flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <svg
                  class="flex-shrink-0 w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span class="sr-only">Info</span>
                <div class="ms-3 text-sm font-medium">
                  {
                    !passwordsMatch && <p>Las contraseñas no coinciden</p>
                  }
                  {
                    error && <p>{error}</p>
                  }
                </div>
                <button
                  type="button"
                  class="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
                  data-dismiss-target="#alert-2"
                  aria-label="Close"
                  onClick={() => setIsClose(false)}
                >
                  <span class="sr-only">Close</span>
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
            )}
            <div class="mt-2 mb-2 text-center">
              <a className="text-blue-700" href="/login">
                ¿Ya tienes una cuenta? Inicia Sesión
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
