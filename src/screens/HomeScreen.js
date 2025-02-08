import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TaskContext } from "../../TaskContext";
import dayjs from "dayjs";  
import styles from "../styles/HomeScreenStyles"; 

export default function HomeScreen({ navigation }) {
  const { tasks } = useContext(TaskContext);

  const activeTasks = tasks.filter((task) => !task.completed);

  const tasksWithThreeDaysOrLessLeft = activeTasks.filter((task) => {
    const taskDeadline = dayjs(task.deadline);  
    const threeDaysOrLessLeft = taskDeadline.isBefore(dayjs().add(4, "day"), "day");  
    const isTodayOrInFuture = taskDeadline.isAfter(dayjs().subtract(1, "day"), "day"); 
    return threeDaysOrLessLeft && isTodayOrInFuture;
  });

  tasksWithThreeDaysOrLessLeft.sort((a, b) => {
    const dateA = dayjs(a.deadline);
    const dateB = dayjs(b.deadline);
    return dateA.isBefore(dateB) ? -1 : 1; 
  });

  const activeTasksCount = activeTasks.length;
  const tasksWithThreeDaysOrLessLeftCount = tasksWithThreeDaysOrLessLeft.length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Your Tasks</Text>
      <Text style={styles.subtitle}>
        You have {activeTasksCount} active task{activeTasksCount !== 1 ? "s" : ""}
      </Text>
      
      {tasksWithThreeDaysOrLessLeftCount > 0 && (
        <View style={styles.tasksWithDeadline}>
          <Text style={styles.subTitle}>Tasks Due in the Next Few Days:</Text>
          {tasksWithThreeDaysOrLessLeft.map((task) => (
            <Text key={task.id} style={styles.taskItem}>
              {task.title} - Deadline: {dayjs(task.deadline).format("YYYY-MM-DD")}
            </Text>
          ))}
        </View>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("List")}
      >
        <Text style={styles.buttonText}>View Task List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AddEdit")}
      >
        <Text style={styles.buttonText}>Add New Task</Text>
      </TouchableOpacity>
    </View>
  );
}
