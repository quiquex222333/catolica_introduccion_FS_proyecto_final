export const Card = ({ color }) => {
  return (
    <div className="bg-gray-100 py-3 mb-1 rounded-lg border-2 border-gray-300">
      <div className="flex">
        <div className="w-70 flex-none text-left mx-3 text-xl text-gray-500">
          Titulo
        </div>
        <div
          className={`w-30 flex-1 bg-${color}-300 mx-3 rounded-full border-${color}-400 border-1`}
        ></div>
      </div>
      <div className="text-left mx-3 my-2 text-gray-400">Descripcion</div>
      <div className="text-left mx-3 text-gray-400">Fecha Limite:</div>
      <button className="bg-blue-500 px-9 py-1 mx-4 mt-2 rounded-lg text-white">
        Empezar a trabajar
      </button>
    </div>
  );
};
