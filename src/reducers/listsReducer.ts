import { ActionTypes } from '../actions';

let listID: number = 2;
let cardID: number = 3;

const initialState: Test[] = [
  {
    title: 'Resources',
    id: 0,
    cards: [
      {
        id: 0,
        text: '1번 카드',
      },
      {
        id: 1,
        text: '2번 카드',
      },
    ],
  },

  {
    title: 'To Do',
    id: 1,
    cards: [
      {
        id: 0,
        text: '3번 카드',
      },
      {
        id: 1,
        text: '4번 카드',
      },
      {
        id: 2,
        text: '5번 카드',
      },
    ],
  },
];

export type IState = Test[];

export interface Test {
  title: string;
  id: number;
  cards: ICard[];
}

interface ICard {
  id: number;
  text: string;
}

type ListAdd = {
  type: ActionTypes.ADD_LIST;
  payload: string;
};

type CardAdd = {
  type: ActionTypes.ADD_CARD;
  payload: { text: string; listID: number };
};

export type Action = ListAdd | CardAdd;

export const listsReducer = (
  state: IState = initialState,
  action: Action
): IState => {
  switch (action.type) {
    case ActionTypes.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: listID,
      };
      listID += 1;
      return [...state, newList];

    case ActionTypes.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: cardID,
      };
      cardID += 1;
      const newState = state.map((list) => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });

      return newState;

    default:
      return state;
  }
};
