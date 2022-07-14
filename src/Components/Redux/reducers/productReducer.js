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
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return {};
    
        default:
            return state;
    }
}
