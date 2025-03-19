import React, { useEffect, useState } from "react";
import { getAllMyTasks } from "../core/api/tasks.api";
import { CreateTask } from "../components/CreateTask";

export default function Dashboard() {
  const [tasks, setTasks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllMyTasks();
        console.log(response);

        setTasks(response);
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
      <CreateTask/>
      <div>
        Colums component
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div>hello</div>
          <div>world</div>
          <div>hehehe</div>
          <div>hello</div>
          <div>world</div>
          <div>hehehe</div>
          <div>hello</div>
          <div>world</div>
          <div>hehehe</div>

        </div>
      </div>
    </>
  );
}
