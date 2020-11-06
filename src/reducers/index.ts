import { listsReducer } from './listsReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    listsReducer
});


export type RootState = ReturnType<typeof rootReducer>;