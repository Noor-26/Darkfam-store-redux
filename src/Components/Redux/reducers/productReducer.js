import { ActionTypes } from "../contants/actionTypes";

const defState = {
    products : []
}

export const productReducer = (state = defState, {type, payload} ) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products : payload};
    
        default:
            return state;
    }
}