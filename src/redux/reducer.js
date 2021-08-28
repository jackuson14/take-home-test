import {ADD_DATA} from './ActionTypes';

const initialState = {
    data:{
        location:undefined,
        current:undefined
    }
}
export const Data=(state=initialState, action)=>{
    switch(action.type){
        case ADD_DATA:
            return{
                data: action.payload
            }
        default:
            return state;
    }
}