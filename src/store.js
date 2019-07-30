import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { projects } from "./reducers/projects";

export const createMyStore =()=> { 
 let store= createStore(
  projects,
  applyMiddleware(thunk)
)
return store;
}