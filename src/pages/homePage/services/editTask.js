
import http, { AUTH_ROUTES } from "../../../services/api"

export const updateTask = async (payload, user_id, company_id, task_id, setLoading, setRefresh, setShowTaskCard, setShowAddTaskForm) => {
  try {
    const data = await http.put(AUTH_ROUTES.UPDATE_TASK(company_id, user_id, task_id), payload)
    setLoading(false)
    setRefresh(true)
    console.log("updated successfully", data)
    window.alert("Successfully updated a task")
    setShowTaskCard(true)
    setShowAddTaskForm(false)
  } catch (e) {
    setLoading(false)
    window.alert("Failed")
  }
}
