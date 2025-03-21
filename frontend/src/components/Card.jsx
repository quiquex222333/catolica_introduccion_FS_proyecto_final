import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { deleteTask, moveTask, updateTask } from "../core/api/tasks.api";
import { useTasks } from "../context/TaskContext";

export const Card = ({ task }) => {
  const { updateTaskStatus, updateTaskContent, eraseTask } = useTasks();
  const [editTask, setEditTask] = useState(task);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(task);
  const [showModal, setShowModal] = useState(false);

  const handleClickUpdate = async () => {
    try {
      await updateTaskStatus(task);
    } catch (error) {
      window.alert("Error al mover la tarea");
    }
  };

  const handleClickDelete = async () => {
    try {
      await eraseTask(task);
    } catch {
      window.alert("Error al eliminar la tarea");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await updateTaskContent(formData);
      setEditTask(formData);
      closeModal();
    } catch (error) {
      window.alert("Error al actualizar tarea");
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setShowModal(true), 10);
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setIsModalOpen(false), 300);
  };

  let date;
  if (task.untilDate) {
    date = new Date(editTask.untilDate).toISOString().split("T")[0];
  }

  return (
    <div className="bg-gray-100 py-3 mb-1 rounded-lg border-2 border-gray-300">
      <div className="flex">
        <div className="flex-none text-left mx-3 text-xl text-gray-500">
          {editTask.title}
        </div>
        {task.status === "completed" ? null : (
          <button
            className="top-4 right-4 w-10 h-10 flex items-center justify-center bg-orange-400 text-white rounded-full shadow-lg hover:bg-blue-600"
            onClick={openModal}
          >
            <FiEdit size={20} />
          </button>
        )}

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
            <div
              className={`bg-white p-6 rounded-2xl shadow-md w-80 text-center transform transition-all duration-300 ${
                showModal ? "scale-100 opacity-100" : "scale-90 opacity-0"
              }`}
            >
              <h2 className="text-2xl font-semibold">Editar Tarea</h2>
              <div className="mt-4 text-left">
                <label className="block text-gray-700 font-medium">
                  Titulo:
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
                <label className="block text-gray-700 font-medium mt-4">
                  Descripcion:
                </label>
                <input
                  type="text"
                  name="description"
                  value={formData.description ? formData.description : ""}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
                <label className="block text-gray-700 font-medium mt-4">
                  Fecha limite:
                </label>
                <input
                  type="date"
                  name="untilDate"
                  value={formData.untilDate ? formData.untilDate : ""}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="flex justify-between mt-4">
                <button
                  className="px-4 py-2 bg-gray-300 rounded-lg"
                  onClick={closeModal}
                >
                  Cancelar
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                  onClick={handleSave}
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {editTask.description ? (
        <div className="text-left mx-3 my-2 text-gray-400">
          {editTask.description}
        </div>
      ) : null}

      {editTask.untilDate ? (
        <div className="text-left mx-3 text-gray-400">Fecha Limite: {date}</div>
      ) : null}

      <div className="grid grid-cols-6">
        <div className="col-span-4">
          {task.status === "completed" ? null : (
            <button
              className="bg-blue-500 px-9 py-1 mx-4 mt-2 rounded-lg text-white"
              onClick={handleClickUpdate}
            >
              {task.status === "pending" ? "Empezar a trabajar" : "Completar"}
            </button>
          )}
        </div>
        <div className="col-span-2">
          <button
            className="bg-red-500 px-3 py-1 mt-2 rounded-lg text-white"
            onClick={handleClickDelete}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
