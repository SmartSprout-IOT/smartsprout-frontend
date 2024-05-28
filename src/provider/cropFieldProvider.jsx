import CropField from "../models/CropFieldDto";
import axiosInstance from "./axiosConfig";

export const getCropFields = async () => {
  const userId = localStorage.getItem("user_id");
  const response = await axiosInstance.get(`/cropfield/user/${userId}`);
  return response.data.map((cropField) => CropField.fromJson(cropField));
};
