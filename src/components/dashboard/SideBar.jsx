import { createContext, useContext, useEffect, useState } from "react";
import { CgMoreVertical } from "react-icons/cg";
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import {
  MoreVertical,
  ChevronLast,
  ChevronFirst,
  Settings,
  LogOut,
} from "lucide-react";
import smartSproutLogo from "../../assets/Add/SmartSproutLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { setActivateItem } from "../../redux/slices/sidebarSlice";
import { fetchUser } from "../../redux/thunks/userThunks";
import { Button } from "antd";
import ConfirmDialog from "../../utils/ConfirmDialog";
import { logOutUser } from "../../redux/thunks/authThunks";
import { useNavigate } from "react-router-dom";

const SidebarContext = createContext();

export default function SideBar({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const [expanded, setExpanded] = useState(true);
  const [showDialog, setShowDialog] = useState(false);

  const handleLogout = () => {
    dispatch(logOutUser());
    setShowDialog(false);
    navigate("/home");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const userName = user ? user.userFirstName : "User";
  const lastName = user ? user.userLastName : "Name";
  const imageData =
    user?.imageData ??
    "https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1";
  const userEmail = user ? user.userEmail : "user@example.com";

  return (
    <aside className="h-screen">
      <nav className="h-full inline-flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <button onClick={() => {
            navigate("/home")
          }}>
            <img
              src={smartSproutLogo}
              alt="logo"
              className={`overflow-hidden transition-all ${
                expanded ? "w-20" : "w-0"
              }`}
            />
          </button>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <button onClick={() => setShowDialog(true)}>
              <LogOut className="transform rotate-180" color="#c53030" />
            </button>
          </div>

          <ConfirmDialog
            show={showDialog}
            onClose={() => setShowDialog(false)}
            onConfirm={() => {
              handleLogout();
            }}
          />

          <div
            className={`
              flex justify-between items-center 
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
            `}
          >
            <div className="loading-4">
              <h4 className="font-semibold text-red-700">Cerrar Sesión</h4>
            </div>
          </div>
        </div>
        <div className="border-t flex p-3">
          <img src={imageData} alt="" className="w-10 h-10 rounded-md" />
          <div
            className={`
              flex justify-between items-center 
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
            `}
          >
            <div className="loading-4">
              <h4 className="font-semibold">
                {userName} {lastName}
              </h4>
              <span className="text-xs text-gray-600">{userEmail}</span>
            </div>
            <button
              onClick={() => navigate("/dashboard/perfil")} // Redirige a la página de perfil
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              <Settings />
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SideBarItem({ icon, text, id, alert }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activateItem = useSelector((state) => state.sidebar.activateItem);
  const pathLocation = window.location.pathname.split("/")[2];
  const active = activateItem === id && pathLocation===activateItem || pathLocation === id;
  const { expanded } = useContext(SidebarContext);

  const handleClick = () => {
    dispatch(setActivateItem(id));
    navigate(`/dashboard/${id}`);
  };
  return (
    <li
      className={`
            relative flex items-center py-2 px-3 my-1
            font-medium rounded-md cursor-pointer
            transition-colors
            ${
              active
                ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                : "hover:bg-indigo-50 text-gray-600"
            }
          `}
      onClick={handleClick}
    >
      <div className="text-black">{icon}</div>

      <span
        className={`overflow-hidden transition-all text-black whitespace-nowrap ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-[#E55934] ${
            expanded ? "" : "top-2"
          }`}
        ></div>
      )}
    </li>
  );
}
