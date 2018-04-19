import { combineReducers } from 'redux';
import testReducer from './testReducer';
import about from './about';
import serviceReducer from './serviceReducer';
import stepReducer from './stepReducer';

const rootReducers = combineReducers({
  testReducer,
  about,
  serviceReducer,
  stepReducer
});

export default rootReducers;
