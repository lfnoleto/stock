import {CORS_SAP,DESC_NAME} from './actionsTypes'

export const corsQrcode = user =>{
    return{
        type:CORS_SAP,
        payload:user
    }
}


export const descQtcode = user =>{
    return{
        type: DESC_NAME,
        payload:user
    }
}