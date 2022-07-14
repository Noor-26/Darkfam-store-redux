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
export const selectProductReducer = (state = {}, {type, payload} ) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return payload;
    
        default:
            return state;
    }
}
