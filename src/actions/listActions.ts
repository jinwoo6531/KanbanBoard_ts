import { ActionTypes } from './types';


export const addList = (title:string) => {
    return {
        type : ActionTypes.ADD_LIST,
        payload : title 

    }
};