import {CORS_SAP,DESC_NAME} from '../actions/actionsTypes'


const initialState ={
    codigo: null,
    desc:null
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case CORS_SAP:
            return {
                ...state,
                name:action.payload.codigo
            }
        case DESC_NAME:
            return {
                ...state,
                desc:action.payload.desc
            }
        default:
            return state    
    }
} 


export default reducer