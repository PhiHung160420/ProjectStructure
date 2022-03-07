import {IAction, types} from './types';

export const loadingAction = (payload: any): IAction => ({
  type: types.LOADING_ACTION,
  payload,
});
