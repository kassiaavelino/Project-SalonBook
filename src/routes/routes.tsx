import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Agendamento from "../pages/Agendamento/Agendamento";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agendamento" element={<Agendamento />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;