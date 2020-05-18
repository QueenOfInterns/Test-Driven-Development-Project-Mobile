import { SAVE_DATA } from "../actions/actionTypes";

const initialState = {
    movies: []
}
  
const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_DATA:
            return { ... state, movies: action.payload }
        default:
            return state;
    }
}
  
export default mainReducer;