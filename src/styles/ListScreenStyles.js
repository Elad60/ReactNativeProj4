import { StyleSheet } from "react-native";

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
      flexWrap: 'wrap',
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
      width: '70%',      
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
      alignItems: "center",
      gap: 15,
    },
    removeButton: {
      padding: 5,
    },
  });

export default styles;