import { combineReducers } from 'redux';
import UserReducer from './reducers/UserReducer';
import TokenReducer from './reducers/TokenReducer';
const RootReducer = combineReducers({
  UserReducer,
  TokenReducer,
});
export default RootReducer;
