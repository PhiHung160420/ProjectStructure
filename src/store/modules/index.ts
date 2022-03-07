import {combineReducers} from 'redux';
import loadingReducer from 'store/reducers/loadingReducer';

export default {
  rootReducer: combineReducers({
    loading: loadingReducer,
  }),
};
