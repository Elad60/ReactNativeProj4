import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import DatePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import styles from "../styles/AddEditScreenStyles"; 

export default function AddEditScreen({ route, navigation }) {
  const { task, isEdit } = route.params || {};
  const [taskTitle, setTaskTitle] = useState(task?.title || "");
  const [taskCompleted, setTaskCompleted] = useState(task?.completed || false);
  const [taskDeadline, setTaskDeadline] = useState(
    task?.deadline ? dayjs(task.deadline) : dayjs()
  );
  const [taskDescription, setTaskDescription] = useState(
    task?.description || ""
  );
  const [titleError, setTitleError] = useState(""); // Error for title
  const [descriptionError, setDescriptionError] = useState(""); // Error for description

  // Validate Description - 100 character limit
  const validateDescription = (description) => {
    const charCount = description.length;

    if (charCount > 100) {
      setDescriptionError(
        `Description must be under 100 characters (currently: ${charCount})`
      );
      return false;
    }

    setDescriptionError(""); // Clear description error if valid
    return true;
  };

  const validateTitle = (title) => {
    const charCount = title.length;

    if (charCount === 0) {
      setTitleError("Title cannot be empty");
      return false;
    }

    if (charCount > 35) {
      setTitleError(
        `Title must be under 35 characters (currently: ${charCount})`
      );
      return false;
    }

    setTitleError(""); // Clear error if valid
    return true;
  };

  // Validate title and description when the component mounts
  useEffect(() => {
    validateTitle(taskTitle);
    validateDescription(taskDescription);
  }, [taskTitle, taskDescription]);

  const handleSave = () => {
    if (!validateTitle(taskTitle) || !validateDescription(taskDescription)) {
      return;
    }

    const newTask = {
      id: task?.id || Date.now().toString(),
      title: taskTitle,
      description: taskDescription,
      completed: isEdit ? taskCompleted : false,
      deadline: taskDeadline.format("YYYY-MM-DD"),
    };

    navigation.navigate("List", { newTask, isEdit });
  };

  const isSubmitDisabled = titleError !== "" || descriptionError !== "";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isEdit ? "Edit Task" : "Add New Task"}</Text>
      <TextInput
        style={styles.input}
        placeholder="Task Title (Max 30 characters)"
        multiline
        value={taskTitle}
        onChangeText={(text) => {
          setTaskTitle(text);
          validateTitle(text);
        }}
      />
      {titleError !== "" && (
        <Text style={styles.errorText}>{titleError}</Text>
      )}

      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Task Description (Max 100 characters)"
        multiline
        value={taskDescription}
        onChangeText={(text) => {
          setTaskDescription(text);
          validateDescription(text);
        }}
      />
      {descriptionError !== "" && (
        <Text style={styles.errorText}>{descriptionError}</Text>
      )}

      <Text style={styles.label}>Select Task Deadline:</Text>
      <DatePicker
        mode="single"
        date={taskDeadline}
        onChange={(event) => setTaskDeadline(event.date)}
        minDate={dayjs().add(-1, "day")}
        maxDate={dayjs().add(1, "year")}
      />

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

      <TouchableOpacity
        style={[styles.saveButton, isSubmitDisabled && styles.disabledButton]}
        onPress={handleSave}
        disabled={isSubmitDisabled}
      >
        <Text style={styles.saveButtonText}>Save Task</Text>
      </TouchableOpacity>
    </View>
  );
}
