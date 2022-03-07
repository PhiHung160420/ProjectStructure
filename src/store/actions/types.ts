export interface IAction {
  type: string;
  payload?: any;
  onSuccess?: Function;
  onError?: Function;
}

export const types = {
  LOADING_ACTION: 'LOADING_ACTION',
};
