
export const getCompanyProfile=(data)=>{
    return{
        type:"GET_CLIENT_PROFILE",
        payload:data
    }
}
export const getEmployeeProfile=(data)=>{
    return{
        type:"GET_EMPLOYEE_PROFILE",
        payload:data
    }
}