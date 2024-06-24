import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCropFields } from "../../redux/thunks/cropFieldThunks";
import { FcElectricalSensor } from "react-icons/fc";
import Regadera from "../../assets/img/riego.gif";
import { Button } from "antd";

export const BodyIoT = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.cropfield);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    dispatch(fetchCropFields());
  }, [dispatch]);

  useEffect(() => {
    if (items.length > 0) {
      setSelectedItem(items[0]);
    }
  }, [items]);

  const handleChange = (event) => {
    const selectedItem = items.find(item => item.cropFieldId === Number(event.target.value));
    setSelectedItem(selectedItem);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <div className="mt-5 p-4 rounded-md border-2 h-auto">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-10 h-10">
              <FcElectricalSensor style={{ width: "100%", height: "100%" }} />
            </div>
            <h1 className="text-2xl font-bold mt-4 md:mt-0 md:ml-4">
              Información de los sensores
            </h1>
            <div className="mt-4 md:mt-0 md:ml-4">
              <select className="border rounded p-2" onChange={handleChange}>
                {items.map((item) => (
                  <option key={item.cropFieldId} value={item.cropFieldId}>
                    {item.cropFieldName}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <h1 className="mx-4 mt-4">Datos Actuales</h1>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-row mt-4 md:mt-0">
              <div className="bg-white shadow-md rounded-lg p-4 m-4">
                <h2 className="text-lg font-semibold">
                  Temperatura:{" "}
                  <span className="text-red-500 text-xl font-bold">25</span>°C
                </h2>
              </div>
            </div>
            <div className="flex flex-row mt-4 md:mt-0">
              <div className="bg-white shadow-md rounded-lg p-4 m-4">
                <h2 className="text-lg font-semibold">
                  Humedad:{" "}
                  <span className="text-red-500 text-xl font-bold">25</span>%
                </h2>
              </div>
            </div>
            <div className="flex flex-row mt-4 md:mt-0 md:ml-auto">
              <div className="bg-white shadow-md rounded-lg p-4 m-4">
                {selectedItem && (
                  <>
                    <h2 className="text-lg font-mono">
                      Temperatura Ideal:{" "}
                      <span className="text-red-500 text-xl font-bold">
                        {selectedItem.idealTemperature}
                      </span>
                      °C
                    </h2>
                    <h2 className="text-lg font-mono">
                      Humedad Ideal:{" "}
                      <span className="text-red-500 text-xl font-bold">
                        {selectedItem.idealHumidity}
                      </span>
                      %
                    </h2>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-mono font-bold">
          Hora de Inicio:{" "}
          <span className="text-red-500 text-xl font-bold">12:45:00</span>
        </h2>
        <h2 className="text-lg font-mono font-bold">
          Tiempo Transcurrido:{" "}
          <span className="text-red-500 text-xl font-bold">12:45:00</span>
        </h2>
      </div>
      <div className="mt-4 w-full flex justify-center items-center">
        <img src={Regadera} alt="Regadera" className="w-full max-w-sm" />
      </div>
      <div className="w-full flex justify-end mt-4">
        <Button className="bg-orange-500 text-white w-44 h-14">
          <p className="font-mono text-lg">Iniciar</p>
        </Button>
      </div>
    </div>
  );
};
