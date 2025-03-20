import { deleteTask, moveTask } from "../core/api/tasks.api";

export const Card = ({ color, task }) => {
  const handleClickUpdate = async () => {
    try {
      await moveTask(task);
      window.location.reload();
    } catch (error) {
      window.alert("Error al mover la tarea");
    }
  };

  const handleClickDelete = async () => {
    try {
      await deleteTask(task)
      window.location.reload()
    } catch {
      window.alert("Error al eliminar la tarea");
    }
  }

  let date;
  if (task.untilDate) {
    date = new Date(task.untilDate).toISOString().split("T")[0];
  }

  let bgColor = "bg-yellow-300";
  let brColor = "border-yellow-400";
  if (color === 'red') {
    bgColor = "bg-red-300";
    brColor = "border-red-400"
  }
  if (color === "green") {
    bgColor = "bg-green-300";
    brColor = "border-green-400"
  }

  return (
    <div className="bg-gray-100 py-3 mb-1 rounded-lg border-2 border-gray-300">
      <div className="flex">
        <div className="w-70 flex-none text-left mx-3 text-xl text-gray-500">
          {task.title}
        </div>
        <div
          className={`w-30 flex-1 ${bgColor} mx-3 rounded-full ${brColor} border-1`}
        ></div>
      </div>

      {task.description ? (
        <div className="text-left mx-3 my-2 text-gray-400">
          {task.description}
        </div>
      ) : null}

      {task.untilDate ? (
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
