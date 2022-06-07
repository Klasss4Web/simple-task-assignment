import { user } from "../../../features/authUserSlice";
import http, { AUTH_ROUTES } from "../../../services/api";
// import { AUTH_ROUTES } from "../../../services/routes.constants";

export const loginUser = async (payload, setLoading, dispatch, navigate) => {
 try {
  const response = await http.post(AUTH_ROUTES.LOGIN, payload);
  console.log("login successfully", response)
  localStorage.setItem("11#221#", response?.data?.results?.token);
  dispatch(user(response?.data))
  navigate("/home")
  setLoading(false)
  // window.location.href="/home"
  return response;
 } catch(error) {
   setLoading(false)
   console.log("error trying to login", error?.response)
 }
};
