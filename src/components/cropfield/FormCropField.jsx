import React, { useCallback, useState, useRef, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  Autocomplete,
} from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { fetchCropFieldById, updateCropFieldDto } from "../../redux/thunks/cropFieldThunks";
import { useParams, useNavigate } from "react-router-dom"; // Importa useNavigate
import { clearCropFieldState } from "../../redux/slices/updateCropFieldSlice";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 40.7128,
  lng: -74.006,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

export const FormCropField = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Usa useNavigate en lugar de useHistory
  const { cropfield, loading, error } = useSelector((state) => state.updateCropField);

  const initialState = {
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
  };
  
  const [cropField, setCropField] = useState(initialState);

  useEffect(() => {
    if (id) {
      dispatch(fetchCropFieldById(id));
    } else {
      setCropField(initialState);
      dispatch(clearCropFieldState());
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (cropfield) {
      setCropField({
        cropFieldName: cropfield.cropFieldName || "",
        cropFieldDescription: cropfield.cropFieldDescription || "",
        latitudeData: cropfield.latitudeData || "",
        longitudeData: cropfield.longitudeData || "",
        cropFieldSize: cropfield.cropFieldSize || "",
        soilType: cropfield.soilType || "",
        cropType: cropfield.cropType || "",
        cropVariety: cropfield.cropVariety || "",
        cropPlant: cropfield.cropPlant || "",
        cropPlantingDate: cropfield.cropPlantingDate || "",
        numPlants: cropfield.numPlants || "",
        minTemperature: cropfield.minTemperature || "",
        maxTemperature: cropfield.maxTemperature || "",
        minHumidity: cropfield.minHumidity || "",
        maxHumidity: cropfield.maxHumidity || "",
      });
    }
  }, [cropfield]);

  useEffect(() => {
    return () => {
      dispatch(clearCropFieldState());
    };
  }, [dispatch]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCc6B5eTCAvXyLm8Jr8iFGUHyafcWXFvdg", // Reemplaza con tu clave de API
    libraries: ["places"],
  });

  const [selected, setSelected] = useState(null);
  const [mapCenter, setMapCenter] = useState(center);
  const autocompleteRef = useRef(null);
  const mapRef = useRef(null);

  const onMapClick = useCallback((event) => {
    setSelected({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
    setCropField((prev) => ({
      ...prev,
      latitudeData: event.latLng.lat(),
      longitudeData: event.latLng.lng(),
    }));
  }, []);

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onPlaceChanged = () => {
    if (autocompleteRef.current !== null && autocompleteRef.current.getPlace) {
      const place = autocompleteRef.current.getPlace();
      if (place.geometry) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        setSelected({ lat, lng });
        setCropField((prev) => ({
          ...prev,
          latitudeData: lat,
          longitudeData: lng,
        }));
        setMapCenter({ lat, lng }); // Actualizamos el centro del mapa
        if (mapRef.current) {
          mapRef.current.panTo({ lat, lng });
          mapRef.current.setZoom(14); // Puedes ajustar el zoom según sea necesario
        }
      }
    }
  };

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCropField((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("CropField data submitted: ", cropField);
    dispatch(updateCropFieldDto(cropField)).then(() => {
      navigate("/dashboard/cultivos"); // Usa navigate en lugar de history.push
    });
  };


  return (
    <div>
      <h1 className="text-[22px] font-bold mb-4 text-center">
        Agregar nuevo cultivo
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-auto w-[60%]">
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
            <label className="block text-gray-700">
              Descripción del Cultivo
            </label>
            <input
              type="text"
              name="cropFieldDescription"
              value={cropField.cropFieldDescription}
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
            <label className="block text-gray-700">Ubicación del Cultivo</label>
            <Autocomplete
              onLoad={(autocomplete) => {
                autocompleteRef.current = autocomplete;
              }}
              onPlaceChanged={onPlaceChanged}
            >
              <input
                type="text"
                placeholder="Busca un lugar"
                style={{ width: "90%", height: "40px", marginBottom: "10px" }}
              />
            </Autocomplete>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={8}
              center={mapCenter} // Usamos el estado del centro del mapa
              options={options}
              onClick={onMapClick}
              onLoad={onLoad}
            >
              {selected && (
                <Marker position={{ lat: selected.lat, lng: selected.lng }} />
              )}
            </GoogleMap>
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
            <label className="block text-gray-700">
              Temperatura Mínima (°C)
            </label>
            <input
              type="number"
              name="minTemperature"
              value={cropField.minTemperature}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">
              Temperatura Máxima (°C)
            </label>
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
        </div>

        <div className="flex justify-center">
          <button
          onClick={handleSubmit}
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded shadow-md hover:bg-orange-600 focus:outline-none"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};
