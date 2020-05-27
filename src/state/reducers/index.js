import {combineReducers, createStore} from 'redux';
import mainReducer from './mainReducer';

const appReducers = combineReducers({
  mainReducer,
});

const appStore = createStore(appReducers);

export default appStore;
