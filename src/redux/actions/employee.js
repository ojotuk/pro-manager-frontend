import useAxios from "../../utility/axios-token-manager/init"

import {loadStart, loadStop} from './loading'

const getProfile=async (dispatch)=>{
    try {
        dispatch(loadStart())
    const response =await useAxios.get('/app/v2/005/my-profile');
    dispatch(loadStop())
      if(response){
        return response.data
      }
    } catch (error) {
      console.log(error)
      return {}
    }
  }
export const getMyProfile=(data)=>async (dispatch)=>{

    return dispatch({
        type:"GET_MY_PROFILE",
        payload:await getProfile(dispatch)
    })
}

export const updateCurrentState = ()=>{
    return{
        type:"ALLOW_REFRESH"
    }
}