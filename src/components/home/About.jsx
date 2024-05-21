import React from "react";

export const About = () => {
  return (
    <div id="about" className="w-full bg-[#9effe4]">
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 md:text-start text-center">Acerca de SmartSprout</h2>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
            <img
              src="https://www.innovatefpga.com/attachment/member/2021/AP055-946BE07319D93020/Main.png"
              alt="IoT Sensors"
              className="w-[80%] rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:ml-6">
            <div className="w-[80%] mx-auto text-center">
              <p className="text-base mb-4 text-justify">
                Nuestro proyecto se enfoca en optimizar la forma en que se
                gestiona el riego. Utilizando sensores IoT y tecnología
                inteligente, hemos desarrollado un sistema de riego automatizado
                que optimiza el uso del agua al tiempo que maximiza el
                rendimiento de los cultivos.
              </p>
              <p className="text-base mb-4 text-justify">
                Con nuestras aplicaciones web y móviles, los usuarios pueden
                monitorear y controlar remotamente sus sistemas de riego desde
                cualquier lugar, asegurando que sus cultivos reciban la cantidad
                precisa de agua que necesitan, ahorrando tiempo y recursos.
              </p>
              <p className="text-base text-justify">
                Nuestra misión es empoderar a los agricultores con soluciones de
                riego eficientes y sostenibles, contribuyendo en última
                instancia a una industria agrícola más resiliente y productiva.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center mt-12">
          <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
            <img
              src="https://i.pinimg.com/originals/5f/08/50/5f08505655b858d52ea4ef07a6fa58d5.gif"
              alt="Web and Mobile Apps"
              className="w-[50%] rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:mr-6">
            <div className="w-[80%] mx-auto text-center">
              <p className="text-base mb-4 text-justify">
                Nuestras aplicaciones web y móviles proporcionan interfaces
                intuitivas para que los usuarios monitoreen datos de sensores,
                establezcan horarios de riego, y reciban alertas y
                notificaciones en tiempo real.
              </p>
              <p className="text-base mb-4 text-justify">
                Ya sea que administres un pequeño jardín o una operación
                agrícola a gran escala, nuestra plataforma personalizable se
                adapta a tus necesidades, brindándote control e información
                sobre tu sistema de riego como nunca antes.
              </p>
              <p className="text-base text-justify">
                Únete a nosotros en abrazar el futuro de la agricultura, donde
                la tecnología se encuentra con la sostenibilidad para crear
                prácticas agrícolas más inteligentes y eficientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
