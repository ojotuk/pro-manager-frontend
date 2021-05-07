import { combineReducers } from "redux"
import loadingReducer from "./loading"
import auth from './auth'

const rootReducer = combineReducers({
  loading:loadingReducer,
  auth:auth
})

export default rootReducer;