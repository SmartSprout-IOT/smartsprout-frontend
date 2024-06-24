import IrrigationSuggestion from "../models/IrrigationSuggestionDto";
import axiosInstance from "./axiosConfig";

export const getIrrigationSuggestionsByCropFieldId = async (cropFieldId) => {
  const response = await axiosInstance.get(
    `/irrigation-suggestion/${cropFieldId}`
  );
  return IrrigationSuggestion.fromJson(response.data);
};
