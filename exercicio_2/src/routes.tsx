import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context.tsx/AuthContext";
import { UserProvider } from "./context.tsx/UserContext";

import Conversor from "./pages/TelaInicial";

function Rotas() {
  return (
    <AuthProvider>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Conversor />} />
        </Routes>
      </UserProvider>
    </AuthProvider>
  );
}

export default Rotas;
