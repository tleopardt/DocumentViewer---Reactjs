import { createStore, applyMiddleware } from "@reduxjs/toolkit"
import thunk from 'redux-thunk'
import rootReducer from './Reducers'

export default createStore(rootReducer, applyMiddleware(thunk))