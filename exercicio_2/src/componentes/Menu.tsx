import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-800 p-4 text-white flex justify-around">
      <button
        className="hover:bg-blue-700 p-2 rounded"
        onClick={() => navigate("/calculadora")}
      >
        Calculadora
      </button>
      <button
        className="hover:bg-blue-700 p-2 rounded"
        onClick={() => navigate("/conversor")}
      >
        Conversor
      </button>
      <button
        className="hover:bg-blue-700 p-2 rounded"
        onClick={() => navigate("/notas")}
      >
        Calculadora de notas
      </button>
    </nav>
  );
};

export default Navbar;
