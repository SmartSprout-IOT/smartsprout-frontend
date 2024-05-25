import UserModel from "../models/UserDto";
import axiosInstance from "./axiosConfig";

export const getUser = async () => {
    const userId = localStorage.getItem("user_id");
    const response = await axiosInstance.get(`/users/${userId}`);
    return UserModel.fromJson(response.data);
}