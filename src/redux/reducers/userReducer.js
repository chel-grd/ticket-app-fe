import { GET_USER } from "../types";

const initialState = null;

// eslint-disable-next-line
export default(state=initialState, action) => {
    switch(action.type) {
        case GET_USER:
            return action.payload;
        default:
            return state;
    }
}