
import http, { AUTH_ROUTES } from "../../../services/api"

export const deleteTask = async (user_id, company_id, task_id, setLoading, setRefresh, setShowTaskCard, setShowAddTaskForm) => {
  try {
    const response = window.confirm("Are you sure you want to delete this task?")
    if (response) {
      const data = await http.delete(AUTH_ROUTES.DELETE_SINGLE_TASK(company_id, user_id, task_id))
    setLoading(false)
    setRefresh(true)
    console.log("Task deleted successfully", data)
  } else {
      console.log("Cancel was pressed");
  }
    
    
    setShowTaskCard(true)
    setShowAddTaskForm(false)
  } catch (e) {
    setLoading(false)
    window.alert("Failed")
  }
}
