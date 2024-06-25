import React from "react";
import { useSelector } from "react-redux";

export const HeaderInicioDashboard = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div>
      <h1 className="text-2xl font-bold">Inicio</h1>
      <span className="text-[#5B6776] text-[14px] pt-2">Buenos días {user ? user.userName : "Invitado"}</span>
    </div>
  );
};
