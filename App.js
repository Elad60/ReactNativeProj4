import React from "react";
import AppNavigator from "./src/AppNavigator";
import TaskProvider from "./TaskContext";

export default function App() {
  return (
    <TaskProvider>
      <AppNavigator />
    </TaskProvider>
  );
}
