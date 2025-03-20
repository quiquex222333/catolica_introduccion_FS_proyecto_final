import { Card } from "./Card";

export const CardList = ({ title, color, tasks }) => {
  let bgColor = "bg-yellow-100";
  let txtColor = "text-yellow-500";
  if (color === 'red') {
    bgColor = "bg-red-100";
    txtColor = "text-red-500"
  }
  if (color === "green") {
    bgColor = "bg-green-100";
    txtColor = "text-green-500"
  }
  
  return (
    <div className={`${bgColor} rounded-lg p-3`}>
      <div className={`text-2xl m-3 ${txtColor}`}>{title}</div>
      {tasks.map((task) => (
        <Card key={task._id} color={color} task={task} />
      ))}
    </div>
  );
};
