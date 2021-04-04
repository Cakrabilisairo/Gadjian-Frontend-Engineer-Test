import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import apiUrl from './reducers/apiUrl'
import personelList from './reducers/personelList'

const rootReducer = combineReducers ({
  apiUrl: apiUrl,
  personelList: personelList
})
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store