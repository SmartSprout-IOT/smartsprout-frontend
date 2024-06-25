import React, { useEffect, useState } from "react";
import CropFieldCard from "../cropfield/CropFieldCard";
import { Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCropFields } from "../../redux/thunks/cropFieldThunks";
import { useNavigate } from "react-router-dom";
import NewsCard from "./NewsCard";

const BodyInicio = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.cropfield);
  const { user } = useSelector((state) => state.user);

  // Estado para guardar la fecha y hora actual
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Función para actualizar la fecha y hora cada segundo
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Limpieza del intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []); // Solo se ejecuta al montar el componente

  useEffect(() => {
    dispatch(fetchCropFields());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="mt-[20px] p-4 rounded-md border-2 h-auto">
        <div className="container mx-auto">
          <h3>Noticias Aleatorias sobre Agricultura</h3>
          <NewsCard />
        </div>
      </div>
      <div className="h-10"></div>
      <div className="p-4 rounded-md border-2 h-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((parcel, index) => (
            <CropFieldCard
              key={index}
              name={parcel.cropFieldName}
              location={parcel.cropFieldDescription}
              timeSpent={parcel.cropPlantingDate}
              totalTime={parcel.cropVariety}
              progress={parcel.cropType}
              id={parcel.cropFieldId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyInicio;
