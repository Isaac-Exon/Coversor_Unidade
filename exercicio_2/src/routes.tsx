import { Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Menu";
import Conversor from "./pages/Coversor";
import Calculator from "./pages/Calculadora";
import CalculadoraNotaFinal from "./pages/CalculoNotas";

function Rotas() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/conversor" element={<Conversor />} />
        <Route path="/calculadora" element={<Calculator />} />
        <Route path="/notas" element={<CalculadoraNotaFinal />} />
      </Routes>
    </>
  );
}

export default Rotas;
