import {types} from 'store/actions/types';

const initLoading = false;

const loadingReducer = (state = initLoading, action: any) => {
  switch (action.type) {
    case types.LOADING_ACTION:
      return action.payload;
    default:
      return state;
  }
};

export default loadingReducer;
