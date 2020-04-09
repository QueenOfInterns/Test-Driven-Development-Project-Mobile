import { INCREMENT_ONE } from "../actions/actionTypes";

const initialState = {
    counter: 10
}
  
const testReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT_ONE:
            return { ... state, counter: state.counter += 1}
        default:
            return state;
    }
}
  
export default testReducer;