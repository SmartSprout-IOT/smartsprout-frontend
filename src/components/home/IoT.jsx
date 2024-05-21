import React from "react";
import statistics from "../../assets/Home/statistics.png";

const IoT = () => {
  return (
    <div id="iot" className="container mx-auto py-12 px-4 md:px-0">
      <h2 className="text-2xl font-semibold mb-8">
        Internet de las Cosas (IoT) en Agricultura
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4 text-justify">
            El Internet de las Cosas (IoT) se refiere a la interconexión de
            dispositivos físicos a través de internet, permitiéndoles recopilar
            y compartir datos. En la agricultura, IoT está revolucionando la
            forma en que se gestionan los cultivos, brindando beneficios
            significativos a los agricultores.
          </p>
          <p className="text-lg mb-4 font-semibold">
            Impacto de IoT en Agricultura:
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div class="p-4 bg-white rounded-lg shadow-md">
              <p className="text-lg mb-2">
                Aumento de la eficiencia en el uso de recursos como agua y
                energía.
              </p>
            </div>
            <div class="p-4 bg-white rounded-lg shadow-md">
              <p className="text-lg mb-2">
                Optimización de la producción agrícola mediante el monitoreo en
                tiempo real.
              </p>
            </div>
            <div class="p-4 bg-white rounded-lg shadow-md">
              <p className="text-lg mb-2">
                Reducción de costos y aumento de la rentabilidad para los
                agricultores.
              </p>
            </div>
            <div class="p-4 bg-white rounded-lg shadow-md">
              <p className="text-lg mb-2">
                Mejora en la calidad de los productos agrícolas.
              </p>
            </div>
            <div class="p-4 bg-white rounded-lg shadow-md">
              <p className="text-lg mb-2">
                Prevención de pérdidas debido a condiciones climáticas adversas
                o plagas.
              </p>
            </div>
          </div>
        </div>
        <div>
          {/* Gráfico estadístico */}
          <div className="bg-gray-200 p-4 rounded-lg">
            <img src={statistics} />
            <p className="text-center text-lg text-gray-600">
              Gráfico estadístico sobre IoT en la agricultura
            </p>
            <p className="text-center mt-2 text-sm text-gray-600">
              Fuente:{" "}
              <a
                href="https://www.elaisian.com/es/2023/02/17/el-internet-de-las-cosas-en-la-agricultura/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#079F73] font-semibold underline"
              >
                Elaisian.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">
          Proceso de Aplicación de IoT en Agricultura
        </h3>
        <p className="text-lg mb-4">
          El proceso de aplicación de IoT en agricultura generalmente involucra
          los siguientes pasos:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
            <div className="flex items-center justify-center h-12 w-12 bg-[#04BF8A] text-white rounded-full">
              1
            </div>
            <p className="text-lg mt-4">
              <span className="font-semibold">Sensores y Dispositivos:</span> Instalación de sensores en el campo para
              recopilar datos sobre condiciones ambientales como humedad del
              suelo, temperatura, humedad del aire, y más.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
            <div className="flex items-center justify-center h-12 w-12 bg-[#04BF8A] text-white rounded-full">
              2
            </div>
            <p className="text-lg mt-4">
              <span className="font-semibold">Conectividad:</span> Los datos recopilados por los sensores se transmiten
              a través de conexiones de red, como Wi-Fi, Bluetooth o redes
              celulares.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
            <div className="flex items-center justify-center h-12 w-12 bg-[#04BF8A] text-white rounded-full">
              3
            </div>
            <p className="text-lg mt-4">
              <span className="font-semibold">Análisis de Datos:</span> Los datos recopilados se analizan utilizando
              algoritmos para obtener información
              útil sobre el estado de los cultivos y tomar decisiones
              informadas.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
            <div className="flex items-center justify-center h-12 w-12 bg-[#04BF8A] text-white rounded-full">
              4
            </div>
            <p className="text-lg mt-4">
              <span className="font-semibold">Acciones Automatizadas:</span> Basándose en los análisis de datos, se
              pueden tomar acciones automatizadas, como activar sistemas de
              riego automáticos, aplicar fertilizantes de manera precisa, o
              alertar sobre condiciones adversas.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
            <div className="flex items-center justify-center h-12 w-12 bg-[#04BF8A] text-white rounded-full">
              5
            </div>
            <p className="text-lg mt-4">
              <span className="font-semibold">Monitoreo y Optimización:</span> Los agricultores monitorean
              continuamente los datos y ajustan sus prácticas agrícolas para
              optimizar el rendimiento de los cultivos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IoT;
