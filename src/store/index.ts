import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {createStore} from 'redux';
import modules from './modules';

const store = createStore(modules.rootReducer);

export default store;

export type RootState = ReturnType<typeof modules.rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
