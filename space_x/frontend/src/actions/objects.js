import axios from 'axios';
import { GET_MENU_ITEMS, GET_ADVANTAGES } from '../actions/types';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

// Get menu items
export const getMenu = () => dispatch => {
    axios.get('api/menu/')
        .then(result => {
            dispatch({
                type: GET_MENU_ITEMS,
                payload: result.data
            });
        }).catch(error => console.log(error));
};

// Get advantages
export const getAdvantages = () => dispatch => {
    axios.get('api/advantages/')
        .then(result => {
            dispatch({
                type: GET_ADVANTAGES,
                payload: result.data
            });
        }).catch(error => console.log(error));
};