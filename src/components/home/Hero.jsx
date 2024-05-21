import React from "react";
import { ReactTyped } from "react-typed";

export const Hero = () => {
  return (
    <div
      id="home"
      className="text-black bg-white h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="max-w-[800px] md:mx-auto mx-4 text-center flex flex-col justify-center">
          <p className="text-[#008F8C] font-bold p-2 font-sans">
            ¡IMPULSA TU RENDIMIENTO AGRÍCOLA CON UN RIEGO INTELIGENTE Y
            EFICIENTE!
          </p>
          <h1 className="font-sans md:text-5xl sm:text-5xl text-4xl font-bold md:py-6">
            Descubre SmartSprout
          </h1>
          <div className="felx justify-center items-center py-6">
            <p className="md:text-4xl sm:text-4xl text-xl font-bold ">
              Rápido, seguro e innovador para
            </p>
            <ReactTyped
              className="md:text-4xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
              strings={["agricultores.", "empresas agrícolas."]}
              typeSpeed={140}
              backSpeed={140}
              loop
            />
          </div>
          <p className="md:text-2xl text-xl font-bold text-[#51676B]">
            Potencia y mejora la producción de tus cultivos con nosotros.
          </p>
          <span>
            <a href="#about">
              <button className="group h-12 w-48 overflow-hidden rounded-2xl bg-[#04BF8A] text-lg my-6 mx-auto py-3 font-bold mt-20 text-black hover:bg-[#079F73]">
                Descubrir
              </button>
            </a>
          </span>
        </div>
        <div className="lg:w-1/2 md:mx-0 mx-5">
          <img
            src="https://hablemosdeempresas.com/wp-content/uploads/sites/2/2018/08/soluciones-iot-agricultura.jpg"
            alt="hero"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
