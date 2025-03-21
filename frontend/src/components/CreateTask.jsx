import { useState } from "react";
import { useTasks } from "../context/TaskContext";

export const CreateTask = () => {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [untilDate, setUntilDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!title) return;
      await addTask(title, description, untilDate);
      setTitle("");
      setDescription("");
      setUntilDate("");
    } catch (error) {
      window.alert("Error al crear tarea");
    }
  };

  return (
    <>
      <div className="mt-5 text-3xl">Crear nueva tarea</div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <div className="border-b border-gray-900/10 pb-8 w-1/2">
            <div className="mt-5">
              <div className="">
                <label
                  htmlFor="title"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Titulo
                </label>
                <div className="mt-2">
                  <div className="rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-sky-500">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      value={title}
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="">
                <label
                  htmlFor="description"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Descripcion
                </label>
                <div className="mt-2">
                  <div className="rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-sky-500">
                    <input
                      type="text"
                      name="description"
                      id="description"
                      value={description}
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="">
                <label
                  htmlFor="untilDate"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Fecha Limite
                </label>
                <div className="mt-2">
                  <div className="rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-sky-500">
                    <input
                      type="date"
                      name="untilDate"
                      id="untilDate"
                      value={untilDate}
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                      onChange={(e) => {
                        setUntilDate(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-1/2 md:w-100 bg-sky-500/50 rounded-lg p-2 font-bold text-gray-700 hover:bg-sky-500 hover:text-white"
              >
                Agregar Tarea
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
