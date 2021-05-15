import { combineReducers } from "redux"
import loadingReducer from "./loading"
import auth from './auth'
import companyReducer from './client'

const rootReducer = combineReducers({
  loading:loadingReducer,
  auth:auth,
  company:companyReducer
})

export default rootReducer;