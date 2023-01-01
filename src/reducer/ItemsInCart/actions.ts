import { ItemsCart } from "./reducer" 

export enum ItemsInCartActionTypes {
    ADD_ITEM = 'ADD_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM',
    HANDLE_AMOUNT_ITEMS = 'HANDLE_AMOUNT_ITEMS',
}

export function addNewItemInCartAction(item: ItemsCart){
    return{
        type: ItemsInCartActionTypes.ADD_ITEM,
        payload: {
            item
        }
    }
}

export function removeItemsFromCartAction(id: string){
    return{
        type: ItemsInCartActionTypes.REMOVE_ITEM,
        payload: {
            id
        }
    }
}

export function handleAmountItemAction(id: string, amountItem: number){
    return{
        type: ItemsInCartActionTypes.HANDLE_AMOUNT_ITEMS,
        payload: {
            id,
            amountItem
        }
    }
}