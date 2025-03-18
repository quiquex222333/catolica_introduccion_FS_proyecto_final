import { useState } from "react";
import logo from "/pngegg.png";
import "./App.css";
import { NavLink } from "react-router";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="grid place-content-evenly gap-4">
      <div className="flex justify-center">
        <img src={logo} className="object-contain object-cover" alt="Logo" />
      </div>
      <h1 className="text-6xl">Aplicación de notas</h1>
      <div className="text-sm/6">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>Registrate o inicia sesion para comenzar a crear notas</p>
      </div>
      <NavLink to="/login" end>
        <div className="bg-sky-500/50 rounded-lg p-2 font-bold text-gray-700 hover:bg-sky-500 hover:text-white">Inicia sesion</div>
      </NavLink>
      <NavLink to="/register" end>
        <div className="bg-sky-500/50 rounded-lg p-2 font-bold text-gray-700 hover:bg-sky-500 hover:text-white">Registrate ahora</div>
      </NavLink>
    </div>
  );
}

export default App;
