import { combineReducers } from "redux"
import loadingReducer from "./loading"
import auth from './auth'
import companyReducer from './client'
import employeeReducer from './employee'


const rootReducer = combineReducers({
  loading:loadingReducer,
  auth:auth,
  company:companyReducer,
  employee:employeeReducer
})

export default rootReducer;