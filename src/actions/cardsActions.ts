import { ActionTypes } from './index';

export const addCard = (listID: number, text: string) => {
  return {
    type: ActionTypes.ADD_CARD,
    payload: { text, listID },
  };
};
