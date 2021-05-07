
export const signUpCompanySuccess=(token,isLogged)=>{
    return{
        type:"SIGN_UP_SUCCESS_COMPANY",
        payload:{token,isLogged}
    }
}
export const signUOutCompany=()=>{
    return{
        type:"SIGN_OUT_COMPANY"
    }
}

export const signInSuccess = (token)=>{
    return{
        type:"SIGN_IN_SUCCESS",
        payload:token
    }
}