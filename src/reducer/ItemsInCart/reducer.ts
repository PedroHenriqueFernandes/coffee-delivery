import { ItemsInCartActionTypes } from "./actions";
import { produce } from "immer";

export interface ItemsCart {
    id: string;
    type: string;
    type2?: string;
    type3?: string;
    img: string;
    title: string;
    subtitle: string;
    amount: number;
    price: number;
}

interface ItemsInCartState{
    itemsInCart: ItemsCart[]
}

export function itemsInCartReducer(state: ItemsInCartState, action: any){
    switch(action.type){
        case ItemsInCartActionTypes.ADD_ITEM:
            return produce(state, (draft) => {
                draft.itemsInCart.push(action.payload.item)
            })
        
        case ItemsInCartActionTypes.REMOVE_ITEM:
            return produce(state, (draft) => {
                draft.itemsInCart = draft.itemsInCart.filter(item => item.id !== action.payload.id)
            })

        case ItemsInCartActionTypes.HANDLE_AMOUNT_ITEMS:
            return produce(state, (draft)=> {
                draft.itemsInCart.map(draft => {
                    if(draft.id === action.payload.id){
                        draft.amount = action.payload.amountItem
                    }
                })
            })

        default: 
            return state
    }
}