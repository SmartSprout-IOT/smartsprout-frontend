import React, { useState } from "react";

export const FormCropField = () => {
  const [cropField, setCropField] = useState({
    
    cropFieldName: "",
    cropFieldDescription: "",
    latitudeData: "",
    longitudeData: "",
    cropFieldSize: "",
    soilType: "",
    cropType: "",
    cropVariety: "",
    cropPlant: "",
    cropPlantingDate: "",
    numPlants: "",
    minTemperature: "",
    maxTemperature: "",
    minHumidity: "",
    maxHumidity: "",
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCropField({
      ...cropField,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("CropField data submitted: ", cropField);
    // Pendiente: AÑADIR LOGICA PARA ENVIAR DATOS AL BACKEND
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 rounded-md border-2">
      <h1 className="text-[22px] font-bold mb-4">Agregar nuevo cultivo</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 
        <div className="mb-4">
          <label className="block text-gray-700">ID del Cultivo</label>
          <input
            type="text"
            name="cropFieldId"
            value={cropField.cropFieldId}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        */}
        
        <div className="mb-4">
          <label className="block text-gray-700">Nombre del Cultivo</label>
          <input
            type="text"
            name="cropFieldName"
            value={cropField.cropFieldName}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Descripción del Cultivo</label>
          <input
            type="text"
            name="cropFieldDescription"
            value={cropField.cropFieldDescription}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Latitud</label>
          <input
            type="number"
            name="latitudeData"
            value={cropField.latitudeData}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Longitud</label>
          <input
            type="number"
            name="longitudeData"
            value={cropField.longitudeData}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Tamaño del Campo (m²)</label>
          <input
            type="number"
            name="cropFieldSize"
            value={cropField.cropFieldSize}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Tipo de Suelo</label>
          <input
            type="text"
            name="soilType"
            value={cropField.soilType}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Tipo de Cultivo</label>
          <input
            type="text"
            name="cropType"
            value={cropField.cropType}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Variedad del Cultivo</label>
          <input
            type="text"
            name="cropVariety"
            value={cropField.cropVariety}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Planta del Cultivo</label>
          <input
            type="text"
            name="cropPlant"
            value={cropField.cropPlant}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Fecha de Plantación</label>
          <input
            type="date"
            name="cropPlantingDate"
            value={cropField.cropPlantingDate}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Número de Plantas</label>
          <input
            type="number"
            name="numPlants"
            value={cropField.numPlants}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Temperatura Mínima (°C)</label>
          <input
            type="number"
            name="minTemperature"
            value={cropField.minTemperature}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Temperatura Máxima (°C)</label>
          <input
            type="number"
            name="maxTemperature"
            value={cropField.maxTemperature}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Humedad Mínima (%)</label>
          <input
            type="number"
            name="minHumidity"
            value={cropField.minHumidity}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Humedad Máxima (%)</label>
          <input
            type="number"
            name="maxHumidity"
            value={cropField.maxHumidity}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        {/* <div className="mb-4">
          <label className="block text-gray-700">Registros de Riego</label>
          <textarea
            name="irrigationRecords"
            value={cropField.irrigationRecords}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div> */}
      </div>

      <button
        type="submit"
        className="bg-orange-500 text-white px-4 py-2 rounded shadow-md hover:bg-orange-600 focus:outline-none"
      >
        Guardar
      </button>
    </form>
  );
};
