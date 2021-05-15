// import {loadStart} from './../actions/loading'
// import useAxios from './../../utility/axios-token-manager/init'

const initialState={
    employees:[],
    leaves:[],
    employeeProfile:{}
}





const companyReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_CLIENT_PROFILE":
        return {
            ...state,...action.payload
        };
    case  "GET_EMPLOYEE_PROFILE":
        return {
            ...state,employeeProfile:{...action.payload}
        }
      default:
        return state;
    } 
  };
  
  export default companyReducer;