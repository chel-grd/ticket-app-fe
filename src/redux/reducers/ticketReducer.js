import { 
    GET_USER_TICKETS, 
    GET_ALL_TICKETS, 
    UPDATE_TABLE_ENTRIES, 
    SELECTED_TICKET 
} from "../types";

const initialState = {
    userTickets: [],
    tickets: [],
    selectedTicket: null,
    entries: 5
};

// eslint-disable-next-line
export default(state = initialState, action) => {
    switch(action.type) {
        case GET_USER_TICKETS:
            return {
                ...state,
                userTickets: action.payload
            };
        case GET_ALL_TICKETS:
            return {
                ...state,
                tickets: action.payload
            };
        case UPDATE_TABLE_ENTRIES:
            return {
                ...state,
                entries: action.payload
            };
        case SELECTED_TICKET:
            return {
                ...state,
                selectedTicket: action.payload
            };
        default:
            return state;
    }
};