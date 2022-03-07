import {types} from './types';

export const loadingAction = (payload: boolean) => ({
  type: types.LOADING_ACTION,
  payload,
});
