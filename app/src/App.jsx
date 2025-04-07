import { useState } from "react";

import "./App.css";
import InputForm from "./components/input-form";
import Tasks from "./components/tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  return (
    <>
      <h1 className="text-3xl mt-19 text-gray-500 font-bold w-full text-center text-bold">
        Task App
      </h1>
      <div className="max-w-xl mx-auto mt-8 p-4  shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Tasks</h2>
        <InputForm addTask={addTask} />
        <Tasks tasks={tasks} />
      </div>
    </>
  );
}

export default App;
