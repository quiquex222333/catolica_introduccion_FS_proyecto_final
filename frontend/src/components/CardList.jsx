import { Card } from "./Card";

export const CardList = ({title, color}) => {
    const usuarios = [
      { id: 1, nombre: 'Ana', edad: 25 },
      { id: 2, nombre: 'Carlos', edad: 30 },
      { id: 3, nombre: 'Elena', edad: 22 }
    ];
  return (
    <div className={`bg-${color}-100 rounded-lg p-3`}>
      <div className={`text-2xl m-3 text-${color}-500`}>{title}</div>
      {usuarios.map((user) => (
        <Card color={color}/>
      ))}
    </div>
  );
};
