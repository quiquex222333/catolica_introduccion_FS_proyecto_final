import React from "react";
import { CreateTask } from "../components/CreateTask";
import DropdownButton from "../components/DropDownBtn";
import { TaskProvider } from "../context/TaskContext";
import TaskDashboar from "../components/TaskDashboar";

export default function Dashboar() {
  return (
    <TaskProvider>
      <DropdownButton />
      <div className="text-5xl">Dashboard</div>
      <CreateTask />
      <TaskDashboar />
    </TaskProvider>
  );
}
