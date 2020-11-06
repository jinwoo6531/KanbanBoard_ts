import { ActionTypes } from '../actions/types';

let listID:number = 2;

const initialState:Test[] = [
    {
        title: "Resources",
        id: 0,
        cards: [
            {
                id: 0,
                text: "1번 카드"
            },
            {
                id:1,
                text: "2번 카드"
            }
        ]
    },

    {
        title: "To Do",
        id: 1,
        cards: [
            {
                id: 0,
                text: "3번 카드"
            },
            {
                id:1,
                text: "4번 카드"
            },
            {
                id:2,
                text: "5번 카드"
            }
        ]
    }
]
    
export type IState = Test[];

export interface Test {
    title:string,
    id:number,
    cards: ICard[]
}

interface ICard {
    id:number,
    text:string
}

type ListAdd = {
    type: ActionTypes.ADD_LIST,
    payload: string,
}

export type Action = ListAdd 

export const listsReducer = (state:IState = initialState,action:Action):IState => {
    switch (action.type) {
        case ActionTypes.ADD_LIST:
            const newList = {
                title : action.payload,
                cards: [],
                id: listID                
            }
            listID += 1
            return [...state, newList]
    
        default:
            return state;
    }
}