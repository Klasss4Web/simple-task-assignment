export const AUTH_ROUTES = {
  LOGIN: "/login",
  GET_ASSIGNED_USER: (company_id) => `/team?product=outreach&company_id=${company_id}`,
  ADDING_TASK: (user_id, company_id) => `/task/${user_id}?company_id=${company_id}`,
  GET_ALL_TASK: (company_id, user_id) => `/task/${user_id}?company_id=${company_id}`,
  
  GET_SINGLE_TASK: (company_id, user_id, task_id) => `/task/${user_id}/${task_id}?company_id=${company_id}`,
  UPDATE_TASK: (company_id, user_id, task_id) => `/task/${user_id}/${task_id}?company_id=${company_id}`,
  DELETE_SINGLE_TASK: (company_id, user_id, task_id) => `/task/${user_id}/${task_id}?company_id=${company_id}`,
};
