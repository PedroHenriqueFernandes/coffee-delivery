import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { addNewItemInCartAction, handleAmountItemAction, removeItemsFromCartAction } from "../reducer/ItemsInCart/actions";
import { ItemsCart, itemsInCartReducer } from "../reducer/ItemsInCart/reducer";
interface ItemsCartProviderProps {
    children: ReactNode;
}

interface ItemsCartContext {
    priceTotal: number;
    itemsInCart: ItemsCart[];
    addItemsToCart: (item: ItemsCart) => void;
    removeItemsFromCart: (id: string) => void;
    handleAmountItem: (id: string, amountItem: number) => void;
}

export const ItemsCartContext = createContext({} as ItemsCartContext);

export function ItemsCartProvider({ children }: ItemsCartProviderProps) {
    const [itemsInCartState, dispatch] = useReducer(
        itemsInCartReducer,
        {
            itemsInCart: []
        },
        () => {
            return {
                itemsInCart: []
            }
        }
    )

    const {itemsInCart} = itemsInCartState
    const [priceTotal, setPriceTotal] = useState(0)

    useEffect(() => {
        setPriceTotal(itemsInCart.reduce((acc, item) => {
            return acc + (item.price * item.amount)
        }, 0))
    }, [itemsInCart, priceTotal])

    function addItemsToCart({ id, type, type2, type3, img, title, subtitle, amount }: ItemsCart) {
        const newItem = {
            id,
            type,
            type2,
            type3,
            img,
            title,
            subtitle,
            amount,
            price: 9.90
        }

        dispatch(addNewItemInCartAction(newItem))
    }

    function removeItemsFromCart(id: string) {
        dispatch(removeItemsFromCartAction(id))
    }

    function handleAmountItem(id: string, amountItem: number) {
        dispatch(handleAmountItemAction(id, amountItem))
    }

    return (
        <ItemsCartContext.Provider value={{ itemsInCart, addItemsToCart, removeItemsFromCart, handleAmountItem, priceTotal }}>
            {children}
        </ItemsCartContext.Provider>
    )
}