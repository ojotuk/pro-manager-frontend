import useAxios from "../../utility/axios-token-manager/init"

 const getTaskApi =async ()=>{
    try {
        const tasks = await useAxios.get('/app/v2/004/all-task')
        // console.log(tasks.data.tasks);
        return tasks.data.tasks
    } catch (error) {
     console.log(error)   
    }
    
}
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

export const getTask = ()=>async (dispatch)=>{
    return dispatch({
        type:"GET_TASKS",
        payload: await getTaskApi()
    })
}

export const signOut = ()=>{
    return{
        type:"RESET"
    }
}