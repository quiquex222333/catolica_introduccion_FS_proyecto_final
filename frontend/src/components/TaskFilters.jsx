import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";

const TaskFilters = () => {
  const { getAllTasks, onFilter } = useTasks();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [untilDate, setUntilDate] = useState("");

  const handleFilter = async () => {
    try {
      await onFilter({ search, status, untilDate });
    } catch (error) {
      window.alert("Error al obtener las tareas");
    }
  };

  const handleClear = async () => {
    try {
      await getAllTasks();
      setSearch("");
      setStatus("");
      setUntilDate("");
    } catch (error) {
      window.alert("Error al obtener las tareas");
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-xl shadow mb-6">
      {/* Buscador por texto */}
      <input
        type="text"
        placeholder="Buscar tarea..."
        className="border border-gray-300 p-2 rounded w-full md:w-1/3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Dropdown de estados */}
      <select
        className="border border-gray-300 p-2 rounded w-full md:w-1/4"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">Todos los estados</option>
        <option value="pending">Por hacer</option>
        <option value="in-progress">En Progreso</option>
        <option value="completed">Completada</option>
      </select>

      {/* Filtro por fecha */}
      <input
        type="date"
        className="border border-gray-300 p-2 rounded w-full md:w-1/4"
        value={untilDate}
        onChange={(e) => setUntilDate(e.target.value)}
      />

      {/* Botón de aplicar filtros */}
      <button
        onClick={handleFilter}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Filtrar
      </button>
      {/* Borrar */}
      <button
        onClick={handleClear}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Borrar
      </button>
    </div>
  );
};

export default TaskFilters;
