import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
    color: "#555",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  tasksWithDeadline: {
    marginBottom: 20,
    paddingHorizontal: 15,
    width: "100%",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFA500",  
    marginBottom: 10,
    textAlign: "center",  
  },
  taskItem: {
    fontSize: 16,
    color: "#FFA500",  
    marginBottom: 5,
    textAlign: "center",  
  },
});

export default styles;
