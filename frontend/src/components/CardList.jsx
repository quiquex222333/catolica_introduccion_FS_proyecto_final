import { Card } from "./Card";

export const CardList = ({title, color, tasks}) => {    
  return (
    <div className={`bg-${color}-100 rounded-lg p-3`}>
      <div className={`text-2xl m-3 text-${color}-500`}>{title}</div>
      {tasks.map((task) => (
        <Card key={task._id} color={color} task={task}/>
      ))}
    </div>
  );
};
