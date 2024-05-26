import { FaSpinner } from "react-icons/fa";

const LoadingView = () => {
    return (
      <div className="flex items-center justify-center min-h-screen w-full relative top-0 left-0">
        <div className="text-center">
          <FaSpinner className="text-blue-500 text-6xl animate-spin" />
          <p className="text-gray-700 mt-4 text-lg">Cargando...</p>
        </div>
      </div>
    );
  };
  
  export default LoadingView;
