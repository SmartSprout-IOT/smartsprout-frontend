import React, { useEffect } from "react";
import CropFieldCard from "./CropFieldCard";
import { Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCropFields } from "../../redux/thunks/cropFieldThunks";

export const BodyCropField = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.cropfield);

  useEffect(() => {
    dispatch(fetchCropFields());
  }, dispatch);
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
          <h1 className="text-[22px] font-bold mb-8">👋 Hola Usuario!</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((parcel, index) => (
              <CropFieldCard
                key={index}
                name={parcel.cropFieldName}
                location={parcel.cropFieldDescription}
                timeSpent={parcel.cropPlantingDate}
                totalTime={parcel.cropVariety}
                progress={parcel.cropType}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="h-10"></div>
      <div className="p-4 rounded-md border-2 h-auto">
        <div className="m-auto text-center">
          <button
            className="bg-orange-500 text-white px-2 py-2 rounded-full shadow-md hover:bg-orange-600 focus:outline-none"
            onClick={() => {
              navigate("/dashboard/cultivos/add-cultivo");
            }}
          >
            <Plus />
          </button>
          <p
            className="text-orange-500 font-bold"
            onClick={() => {
              navigate("/dashboard/cultivos/add-cultivo");
            }}
          >
            Agregar nueva plantación
          </p>
        </div>
      </div>
    </div>
  );
};
