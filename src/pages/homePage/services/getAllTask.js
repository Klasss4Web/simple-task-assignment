import http,  { AUTH_ROUTES } from "../../../services/api";

export const getAllTask = async (company_id, user_id, setLoading, setAllTask) => {
  try {
    // const {
    //   data: { data },
    // } 
    const data = await http.get(AUTH_ROUTES.GET_ALL_TASK(company_id, user_id));
    console.log("All task", data)
    setAllTask([...data?.data?.results]);
    setLoading(false);
  } catch (e) {
    console.log("error getting task", e)
    setAllTask([])
    //  if (e.response.data.message === "Not logged in, Log in to continue") {
    //    localStorage.clear();
    //    errorNotifier(e.response.data.message)
    //  }
  }
};
