import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([
    { id: "1", title: "Finish react project", completed: false, deadline: "2025-01-30" },
    { id: "2", title: "Take blood tests", completed: true, deadline: "2025-02-01" },
    { id: "3", title: "Complete the final project docs", completed: false, deadline: "2025-02-15" },
  ]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
}
