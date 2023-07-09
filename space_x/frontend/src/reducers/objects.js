import { GET_MENU_ITEMS, GET_ADVANTAGES } from '../actions/types';

const initialState = {
    menu: [],
    advantages: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MENU_ITEMS:
            return {
                ...state,
                menu: action.payload
            };
        case GET_ADVANTAGES:
            return {
                ...state,
                advantages: action.payload
            };
        default:
            return state;
    }
};