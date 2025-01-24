import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function AddEditScreen({ route, navigation }) {
  const { task, isEdit } = route.params || {};
  const [taskTitle, setTaskTitle] = useState(task?.title || "");
  const [taskCompleted, setTaskCompleted] = useState(task?.completed || false);
  const [taskDeadline, setTaskDeadline] = useState(
    task?.deadline ? new Date(task.deadline) : new Date()
  );
  const [showPicker, setShowPicker] = useState(false);

  const handleSave = () => {
    if (taskTitle.trim() === "") {
      Alert.alert("Validation", "Task title cannot be empty!");
      return;
    }

    const newTask = {
      id: task?.id || Date.now().toString(), 
      title: taskTitle,
      completed: isEdit ? taskCompleted : false, 
      deadline: taskDeadline.toISOString().split("T")[0],
    };

    navigation.navigate("List", { newTask, isEdit });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isEdit ? "Edit Task" : "Add New Task"}</Text>
      <TextInput
        style={styles.input}
        placeholder="Task Title"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      <TouchableOpacity
        style={styles.dateButton}
        onPress={() => setShowPicker(true)}
      >
        <Text style={styles.dateButtonText}>
          Pick Deadline: {taskDeadline.toISOString().split("T")[0]}
        </Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={taskDeadline}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowPicker(false);
            if (selectedDate) {
              setTaskDeadline(selectedDate);
            }
          }}
        />
      )}
      {isEdit && (
        <TouchableOpacity
          style={[
            styles.statusButton,
            taskCompleted ? styles.completed : styles.notCompleted,
          ]}
          onPress={() => setTaskCompleted(!taskCompleted)}
        >
          <Text style={styles.statusButtonText}>
            {taskCompleted ? "Mark as Incomplete" : "Mark as Completed"}
          </Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  dateButton: {
    backgroundColor: "#E0E0E0",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  dateButtonText: {
    color: "#333",
    fontSize: 16,
  },
  statusButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  completed: {
    backgroundColor: "#28a745",
  },
  notCompleted: {
    backgroundColor: "#dc3545",
  },
  statusButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  saveButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
