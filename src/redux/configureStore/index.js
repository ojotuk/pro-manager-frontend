import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './../reducers/root';



export default function configureStore() {

  const middlewares = [thunk]
//   const middlewareEnhancer = applyMiddleware(...middlewares)

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = () => createStore(rootReducer,{}, composeEnhancers(applyMiddleware(...middlewares)));

  return store()
}