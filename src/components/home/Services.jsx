import React from "react";

export const Services = () => {
  return (
    <div id="services" className="container mx-auto py-12 px-4 md:px-0 text-center">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Nuestros Planes de Suscripción
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-[#51676B]">
          <h3 className="text-xl font-semibold mb-2">Plan para Agricultores</h3>
          <p className="text-gray-700 mb-4 text-justify">
            Este plan está diseñado para satisfacer las necesidades de los
            agricultores individuales que buscan automatizar su sistema de
            riego.
          </p>
          <div className="flex justify-center">
            <ul className="list-disc list-inside mb-4 text-justify">
              <li>Acceso a la aplicación SmartSprout</li>
              <li>Sensor IoT para monitoreo del suelo</li>
              <li>Notificaciones en tiempo real</li>
              <li>Soporte técnico dedicado</li>
            </ul>
          </div>
          <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div class="absolute inset-0 w-3 bg-[#04BF8A] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span class="relative text-black group-hover:text-white">
              ¡Suscribirse ahora!
            </span>
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-[#51676B]">
          <h3 className="text-xl font-semibold mb-2">
            Plan para Empresas Agrícolas
          </h3>
          <p className="text-gray-700 mb-4 text-justify">
            Nuestro plan empresarial está diseñado para satisfacer las
            necesidades de las empresas agrícolas que buscan gestionar múltiples
            áreas de cultivo de manera eficiente.
          </p>
          <div className="flex justify-center">
            <ul className="list-disc list-inside mb-4 text-justify">
              <li>Acceso a la aplicación SmartSprout</li>
              <li>Múltiples sensores IoT para monitoreo del suelo y clima</li>
              <li>Panel de control personalizado para análisis de datos</li>
              <li>Asistencia remota para configuración y mantenimiento</li>
            </ul>
          </div>
          <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
            <div class="absolute inset-0 w-3 bg-[#04BF8A] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span class="relative text-black group-hover:text-white">
              ¡Suscribirse ahora!
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
