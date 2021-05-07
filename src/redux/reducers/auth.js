import {getDecodedToken, getValidToken} from "./../../utility/axios-token-manager/token"

const initialState={
    auth:getDecodedToken(),
    isLogged:getDecodedToken()?true:false,
    token:getValidToken()
}
const successUp = (state) => {
    return {
      ...state,auth:state,isLogged:true
    }
  };
const failLogin = (state) => {
    return {
      ...state,auth:null
    }
  };


const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SIGN_UP_SUCCESS_COMPANY":
        return  successUp(action.payload);
      case "SIGN_OUT_SUCCESS":
        return failLogin();
      case "SIGN_OUT_COMPANY":
        localStorage.removeItem("user")
        return {
          ...state,auth:null,isLogged:false,token:null
        };
      case "SIGN_IN_SUCCESS":
        const token =localStorage.getItem("user")
        return {
          ...state,auth:action.payload,isLogged:true,token:token
        };
      default:
        return state;
    } 
  };
  
  export default authReducer;