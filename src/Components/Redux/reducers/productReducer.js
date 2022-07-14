import { ActionTypes } from "../contants/actionTypes";

const defState = {
    products : [{
        name:"hello",
        by: "hai"
    }
]
}

export const productReducer = (state = defState, {type, payload} ) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
    
        default:
            return state;
    }
}