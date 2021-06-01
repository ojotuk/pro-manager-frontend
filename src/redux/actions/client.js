import useAxios from "../../utility/axios-token-manager/init";
import { loadStart, loadStop } from "./loading";

//
const getTaskApi = async () => {
  try {
    const tasks = await useAxios.get("/app/v2/004/all-task");
    return tasks.data.tasks;
  } catch (error) {
    console.log(error);
  }
};
const getLeavesApi = async (dispatch) => {
  try {
    dispatch(loadStart());
    const response = await useAxios.get("/app/v2/004/leave/all");
    dispatch(loadStop());
    if (response.data.applications) {
      return response.data.applications;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    dispatch(loadStop());
    return [];
  }
};
export const getCompanyProfile = () => async (dispatch) => {
  dispatch(loadStart());
  const response = await useAxios.get("/app/v2/004/all-employees");
  dispatch(loadStop());
  return dispatch({
    type: "GET_CLIENT_PROFILE",
    payload: response.data.client,
  });
};
export const getEmployeeProfile = (data) => {
  return {
    type: "GET_EMPLOYEE_PROFILE",
    payload: data,
  };
};

export const getTask = () => async (dispatch) => {
  return dispatch({
    type: "GET_TASKS",
    payload: await getTaskApi(),
  });
};
export const getLeaves = () => async (dispatch) => {
  return dispatch({
    type: "GET_LEAVES",
    payload: await getLeavesApi(dispatch),
  });
};

export const signOut = () => {
  return {
    type: "RESET",
  };
};
