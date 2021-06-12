// import {loadStart} from './../actions/loading'
// import useAxios from './../../utility/axios-token-manager/init'

const initialState={
    employees:[],
    leaves:[],
    tasks:[],
    attendances:[],
    memo:[],
    employeeProfile:{}
}





const companyReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_CLIENT_PROFILE":
        return {
            ...state,...action.payload
        };
        case "UPDATE-SNAPSHOT":
          return{
            ...state,...action.payload
          }
    case  "GET_EMPLOYEE_PROFILE":
        return {
            ...state,employeeProfile:{...action.payload}
        }
        case "GET_TASKS":
          return{
            ...state,tasks:action.payload
          }
        case "GET_LEAVES":
          return{
            ...state,leaves:action.payload
          }
        case "GET_ATTENDANCE":
          return{
            ...state,attendances:action.payload
          }
      default:
        return state;
    } 
  };
  
  export default companyReducer;