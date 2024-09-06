import { Routes, Route } from "react-router-dom";

import Conversor from "./pages/TelaInicial";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Conversor />} />
    </Routes>
  );
}

export default Rotas;
