
const initialState={
    reload:true
}





const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_MY_PROFILE":
        return {
            ...state,...action.payload,reload:false
        };
        case "ALLOW_REFRESH":
          return{
            ...state,reload:true
          }
      default:
        return state;
    } 
  };
  
  export default employeeReducer;