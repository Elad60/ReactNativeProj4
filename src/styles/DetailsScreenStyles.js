import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f9f9f9",
      padding: 20,
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 5,
      width: "100%",
      maxWidth: 400,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#333",
      marginBottom: 20,
      textAlign: "center",
    },
    detailRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 15,
      alignItems: "center",
    },
    label: {
      fontSize: 18,
      fontWeight: "600",
      color: "#555",
      marginBottom: 5,
    },
    value: {
      fontSize: 18,
      fontWeight: "400",
      color: "#333",
    },
    completed: {
      color: "#28a745",
    },
    notCompleted: {
      color: "#dc3545",
    },
  });

export default styles;