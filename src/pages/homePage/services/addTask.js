
import http, { AUTH_ROUTES } from "../../../services/api"

export const addTask = async (payload, user_id, company_id, setLoading, setRefresh, setShowTaskCard, setShowAddTaskForm) => {
  try {
    const data = await http.post(AUTH_ROUTES.ADDING_TASK(user_id, company_id), payload)
    setLoading(false)
    
    window.alert("Successfully added a task")
    setRefresh(true)
    setShowTaskCard(true)
    setShowAddTaskForm(false)
    console.log("add", data)
  } catch (e) {
    setLoading(false)
    window.alert("Failed")
    // errorNotifier()
  }
}
