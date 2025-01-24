import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { TaskContext } from "../../TaskContext";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  taskContainer: {
    backgroundColor: "#fff",
  },
  completedTaskContainer: {
    backgroundColor: "#d4edda",
  },
  taskText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
  completedTask: {
    fontSize: 18,
    fontWeight: "500",
    color: "#6c757d",
    textDecorationLine: "line-through",
  },
  deadlineText: {
    fontSize: 14,
    color: "#6c757d",
    marginTop: 5,
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 15,
  },
});
