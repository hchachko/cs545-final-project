import axios from 'axios';
import Types from '../Types'

export const baseURL='http://127.0.0.1:4567'

export const fetchCategories = () => async dispatch => {
    const res = await axios.get(`${baseURL}/api/`);
    console.log(res.data)
    dispatch({ type: Types.FETCH_CATEGORIES, payload: res.data.categories });
};

const baseState = { categories: [] };

export default (state = baseState, action) => {
    switch (action.type) {
        case Types.FETCH_CATEGORIES:
            return { ...state, categories: action.payload }
        default:
            return state;
    }
}