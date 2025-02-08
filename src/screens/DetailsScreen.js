import React from "react";
import { View, Text} from "react-native";
import styles from "../styles/DetailsScreenStyles"; 

export default function DetailsScreen({ route }) {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Task Details</Text>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Title:</Text>
          <Text style={styles.value}>{task.title}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Deadline:</Text>
          <Text style={styles.value}>{task.deadline}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Status:</Text>
          <Text
            style={[
              styles.value,
              task.completed ? styles.completed : styles.notCompleted,
            ]}
          >
            {task.completed ? "Completed" : "Not Completed"}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.value}>{task.description || "No description provided"}</Text>
        </View>
      </View>
    </View>
  );
}