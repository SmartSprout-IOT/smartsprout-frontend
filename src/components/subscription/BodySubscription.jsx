import React from 'react';

const PlanCard = ({ planName, features, price }) => {
    return (
      <div className="border-2 p-4 rounded-md shadow-md flex flex-col">
        <h2 className="text-xl font-semibold mb-2 text-left">{planName}</h2>
        <ul className="mb-2 text-left">
          {features.map((feature, index) => (
            <li key={index} className="mb-1 text-xs">{feature}</li>
          ))}
        </ul>
        <div className="text-orange-500 text-2xl font-bold mb-2 text-center">{price}</div>
        <div className="text-center">Suscripción Mensual</div>
      </div>
    );
  };
  

export const BodySubscriptions = ({ user }) => {
  const plans = [
    {
      planName: 'Plan Silver',
      features: [
        'Máximo de 5 registros de cultivos',
        'Recibir Información de los sensores',
        'Automatización en riegos'
      ],
      price: 'S/. 50'
    },
    {
      planName: 'Plan Gold',
      features: [
        'Registro de Cultivos sin límites.',
        'Recibir Información de los sensores',
        'Automatización en riegos.',
        'Acceso a Métricas de los cultivos'
      ],
      price: 'S/. 100'
    }
  ];

  return (
    <div className="mt-[20px] p-4 rounded-md border-2 h-auto">
      <div className="container mx-auto">
        <h1 className="text-[22px] font-bold mb-8">
          👋 ¡Ofrecemos 2 planes de subscripción para que impulses tus cultivos!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {plans.map((plan, index) => (
            <PlanCard
              key={index}
              planName={plan.planName}
              features={plan.features}
              price={plan.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
