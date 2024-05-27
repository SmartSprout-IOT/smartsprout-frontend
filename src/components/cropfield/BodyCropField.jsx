import React from "react";
import CropFieldCard from "./CropFieldCard";
import { Plus } from "lucide-react";

const parcels = [
  {
    name: "Parcela #1",
    location: "Lima, Perú",
    timeSpent: "1hr 30min",
    totalTime: "5 horas",
    progress: 30,
  },
  {
    name: "Parcela #2",
    location: "Chiclayo, Perú",
    timeSpent: "1hr",
    totalTime: "2 horas",
    progress: 50,
  },
  {
    name: "Parcela #3",
    location: "Lima, Perú",
    timeSpent: "1hr 10min",
    totalTime: "1hr 40min",
    progress: 70,
  },
  {
    name: "Parcela #1",
    location: "Lima, Perú",
    timeSpent: "1hr 30min",
    totalTime: "5 horas",
    progress: 30,
  },
  {
    name: "Parcela #2",
    location: "Chiclayo, Perú",
    timeSpent: "1hr",
    totalTime: "2 horas",
    progress: 50,
  },
  {
    name: "Parcela #3",
    location: "Lima, Perú",
    timeSpent: "1hr 10min",
    totalTime: "1hr 40min",
    progress: 70,
  },
];

export const BodyCropField = () => {
  return (
    <div>
      <div className="mt-[20px] p-4 rounded-md border-2 h-auto">
        <div className="container mx-auto">
          <h1 className="text-[22px] font-bold mb-8">👋 Hola Usuario!</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {parcels.map((parcel, index) => (
              <CropFieldCard
                key={index}
                name={parcel.name}
                location={parcel.location}
                timeSpent={parcel.timeSpent}
                totalTime={parcel.totalTime}
                progress={parcel.progress}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="h-10"></div>
      <div className="p-4 rounded-md border-2 h-auto">
        <div className="m-auto text-center">
          <button className="bg-orange-500 text-white px-2 py-2 rounded-full shadow-md hover:bg-orange-600 focus:outline-none">
            <Plus />
          </button>
          <p className="text-orange-500 font-bold">Agregar nueva plantación</p>
        </div>
      </div>
    </div>
  );
};
