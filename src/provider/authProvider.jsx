import axiosInstance from "./axiosConfig";

export const login = async (credentials) => {
  const response = await axiosInstance.post("/auth/login", {
    userEmail: credentials.email,
    userPassword: credentials.password,
  });

  if (response.data.access_token) {
    localStorage.setItem("token", response.data.access_token);
    localStorage.setItem("refresh_token", response.data.refresh_token);
    localStorage.setItem("user_id", response.data.user_id);
  }

  return response.data;
};

export const register = async (credentials) => {
  const response = await axiosInstance.post("/auth/register", {
    userFirstName: credentials.userFirstName,
    userLastName: credentials.userLastName,
    userEmail: credentials.userEmail,
    userPassword: credentials.userPassword,
    imageData: credentials.imageData,
  });

  if (response.data.access_token) {
    localStorage.setItem("token", response.data.access_token);
    localStorage.setItem("refresh_token", response.data.refresh_token);
    localStorage.setItem("user_id", response.data.user_id);
  }

  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("user_id");
};
