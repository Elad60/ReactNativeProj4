import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { TaskContext } from "../../TaskContext";
import styles from "../styles/ListScreenStyles"; 


export default function ListScreen({ route, navigation }) {
  const { tasks, setTasks } = useContext(TaskContext);

  // Handle adding or editing tasks
  React.useEffect(() => {
    if (route.params?.newTask) {
      const { newTask, isEdit } = route.params;
      const updatedTasks = isEdit
        ? tasks.map((task) => (task.id === newTask.id ? newTask : task)) // Edit existing task
        : [...tasks, newTask]; // Add new task

      setTasks(updatedTasks);
    }
  }, [route.params?.newTask]);

  // Function to remove a task
  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const renderTask = ({ item }) => (
    <View
      style={[
        styles.taskItem,
        item.completed ? styles.completedTaskContainer : styles.taskContainer,
      ]}
    >
      <View>
        <Text style={item.completed ? styles.completedTask : styles.taskText}>
          {item.title}
        </Text>
        <Text style={styles.deadlineText}>Deadline: {item.deadline}</Text>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Details", { task: item })}
        >
          <Icon name="information-circle-outline" size={24} color="#007BFF" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("AddEdit", { task: item, isEdit: true })
          }
        >
          <Icon name="create-outline" size={24} color="#FFA500" />
        </TouchableOpacity>
        {item.completed && (
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => removeTask(item.id)}
          >
            <Icon name="trash-outline" size={24} color="#FF4C4C" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
      />
    </View>
  );
} 