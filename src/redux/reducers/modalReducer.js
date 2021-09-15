import { SHOW_ADD_MODAL, SHOW_EDIT_MODAL } from "../types";

const initialState = {
    add: false,
    edit: false,
};

// eslint-disable-next-line
export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ADD_MODAL:
            return {
                ...state,
                add: action.payload
            };
        case SHOW_EDIT_MODAL:
            return {
                ...state,
                edit: action.payload
            };
        default:
            return state;
    }
}