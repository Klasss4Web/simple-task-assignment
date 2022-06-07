import http,  { AUTH_ROUTES } from "../../../services/api";

export const getAssigtnedUser = async (company_id, setLoading, setAssignedUser) => {
  try {
    // const {
    //   data: { data },
    // } 
    const data = await http.get(AUTH_ROUTES.GET_ASSIGNED_USER(company_id));
    console.log("assigned User", data?.data?.results?.data)
    setAssignedUser(data?.data?.results?.data);
    setLoading(false);
  } catch (e) {
    console.log("error getting assigned user", e?.response)
    //  if (e.response.data.message === "Not logged in, Log in to continue") {
    //    localStorage.clear();
    //    errorNotifier(e.response.data.message)
    //  }
  }
};
