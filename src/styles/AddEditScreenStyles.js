import { StyleSheet } from "react-native";

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
  descriptionInput: {
    height: 80,
    textAlignVertical: "top",
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
  statusButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  completed: {
    backgroundColor: "#dc3545",
  },
  notCompleted: {
    backgroundColor: "#28a745",
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
  disabledButton: {
    backgroundColor: "#cccccc",
  },
  errorText: {
    color: "#dc3545",
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
  },
});

export default styles;
