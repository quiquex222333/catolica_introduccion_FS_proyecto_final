export const Card = ({ color, task }) => {
  let date;
  if (task.untilDate) {
    date = new Date(task.untilDate).toISOString().split("T")[0];
  }

  return (
    <div className="bg-gray-100 py-3 mb-1 rounded-lg border-2 border-gray-300">
      <div className="flex">
        <div className="w-70 flex-none text-left mx-3 text-xl text-gray-500">
          {task.title}
        </div>
        <div
          className={`w-30 flex-1 bg-${color}-300 mx-3 rounded-full border-${color}-400 border-1`}
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

      {task.status === "completed" ? null : (
        <button className="bg-blue-500 px-9 py-1 mx-4 mt-2 rounded-lg text-white">
          {task.status === "pending" ? "Empezar a trabajar" : "Completar"}
        </button>
      )}
    </div>
  );
};
