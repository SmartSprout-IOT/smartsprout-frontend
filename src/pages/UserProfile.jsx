import React from 'react';

const UserProfile = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-900">Perfil de Usuario</h2>
      <p className="text-sm text-gray-600 mt-1">
        Sección de Configuración de tus datos personales y preferencias
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700">Nombres</label>
          <input
            type="text"
            value="Mehrab"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            readOnly
          />
        </div>

        <div>
          <label className="block text-gray-700">Apellido</label>
          <input
            type="text"
            value="Bozorgi"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            readOnly
          />
        </div>

        <div>
          <label className="block text-gray-700">Email</label>
          <div className="relative">
            <input
              type="email"
              value="mehrabbozorgi.business@gmail.com"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 pr-10"
              readOnly
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-green-500">✓</span>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-gray-700">Número Telefónico</label>
          <input
            type="text"
            value="58077.79"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            readOnly
          />
        </div>

        <div>
          <label className="block text-gray-700">Contraseña</label>
          <div className="relative">
            <input
              type="password"
              value="********************"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 pr-10"
              readOnly
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-green-500">✓</span>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-gray-700">Ubicación</label>
          <input
            type="text"
            value="Mehrab"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            readOnly
          />
        </div>
      </div>

      <div className="mt-6 flex items-center">
        <button className="flex items-center text-red-600 hover:text-red-800">
          <span>Agregar Método de Pago</span>
          <span className="ml-2 text-2xl">+</span>
        </button>
      </div>

      <div className="mt-8 flex justify-end space-x-4">
        <button className="py-2 px-4 border border-red-600 text-red-600 rounded-md hover:bg-red-100">Cancel</button>
        <button className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700">Save</button>
      </div>
    </div>
  );
};

export default UserProfile;
