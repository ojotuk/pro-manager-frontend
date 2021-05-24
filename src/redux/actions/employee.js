// import {loadStart} from './loading'


export const getMyProfile=(data)=>{
    return{
        type:"GET_MY_PROFILE",
        payload:data
    }
}

export const updateCurrentState = ()=>{
    return{
        type:"ALLOW_REFRESH"
    }
}