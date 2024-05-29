import { createStore } from 'redux';
import stepReducer from './reducer/stepReducer';

const store = createStore(stepReducer);

export default store;
