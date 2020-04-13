import { combineReducers, createStore } from 'redux';
import testReducer from './testReducer';

const appReducers = combineReducers({
    testReducer
});

const appStore = createStore(appReducers);

export default appStore;