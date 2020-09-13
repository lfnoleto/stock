import {createStore,combineReducers } from 'redux'
import qrReducer from  './reducers/qrCodes'


const reducers = combineReducers({
    user:qrReducer,
})

const storeConfig = ()=>{
    return createStore(reducers)
}

export default storeConfig