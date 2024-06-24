import IrrigationComplete from "../models/IrrigationCompleteDto";
import axiosInstance from "./axiosConfig";

export const startIrrigation = async (cropFieldId) => {
  const response = await axiosInstance.post(`/irrigation/start/${cropFieldId}`);
  return response.data;
};

export const stopIrrigation = async (cropFieldId) => {
  const response = await axiosInstance.post(`/iot-management/irrigation-complete/${cropFieldId}`);
  return IrrigationComplete.fromJson(response.data);
};
