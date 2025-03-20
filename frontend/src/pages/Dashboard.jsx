import React, { useEffect, useState } from "react";
import { getAllMyTasks } from "../core/api/tasks.api";
import { CreateTask } from "../components/CreateTask";
import { CardList } from "../components/CardList";

export default function Dashboard() {
  const [tasks, setTasks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllMyTasks();
        setTasks(response);
        console.log(tasks);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="text-5xl">Dashboard</div>
      <CreateTask />
      <div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <CardList
            title="TODO"
            color="red"
            tasks={tasks.filter((task) => task.status === "pending")}
          />
          <CardList
            title="En Progreso"
            color="yellow"
            tasks={tasks.filter((task) => task.status === "in-progress")}
          />
          <CardList
            title="Completo"
            color="green"
            tasks={tasks.filter((task) => task.status === "completed")}
          />
        </div>
      </div>
    </>
  );
}
