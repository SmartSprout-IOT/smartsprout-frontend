import IrrigationRecordModel from "../models/IrrigationRecord";
import axiosInstance from "./axiosConfig";

export const getIrrigationRecordsByCropFieldId = async (cropFieldId) => {
  const response = await axiosInstance.get(
    `/irrigation-record/cropField/${cropFieldId}`
  );
  return response.data.map(irrigationRecord => IrrigationRecordModel.fromJson(irrigationRecord));
};