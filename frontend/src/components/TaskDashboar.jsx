import React from "react";
import { CardList } from "./CardList";
import { useTasks } from "../context/TaskContext";

export default function TaskDashboar() {
  const {tasks, loading, error } = useTasks()

  if (loading) return <>Loading...</>
  if (error) {
    window.alert("Error al cargar tareas...")
  }

  return (
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
  );
}
