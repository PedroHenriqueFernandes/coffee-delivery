import { createContext, ReactNode, useEffect, useState } from "react";

interface ItemsCartProviderProps {
    children: ReactNode;
  }

  interface ItemsCart {
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

interface ItemsCartContext{
    itemsInCart: {
        id: string;
        type: string;
        type2?: string;
        type3?: string;
        img: string;
        title: string;
        subtitle: string;
        amount: number;
        price: number;
    }[];
    addItemsToCart: (item: ItemsCart) => void;
    removeItemsFromCart: (id: string) => void;
    handleAmountItem: (id: string, amountItem: number) => void;
    priceTotal: number;
}

export const ItemsCartContext = createContext({} as ItemsCartContext);

export function ItemsCartProvider({ children }: ItemsCartProviderProps) {
    const [itemsInCart, setItemsInCart] = useState([{amount: 0, price: 9.9} as ItemsCart])
    const [priceTotal, setPriceTotal] = useState(0)

    useEffect(() => {
        setPriceTotal(itemsInCart.reduce((acc, item) => {
            return acc + (item.price * item.amount)
        }, 0))
    }, [itemsInCart, priceTotal])

    function addItemsToCart({id, type, type2, type3, img, title, subtitle, amount} : ItemsCart) {
        setItemsInCart([...itemsInCart, {
            id,
            type,
            type2,
            type3,
            img,
            title,
            subtitle,
            amount,
            price: 9.90
        }])
    }

    function removeItemsFromCart(id: string) {
        const newItems = itemsInCart.filter(item => item.id !== id)
        setItemsInCart(newItems)
    }

    function handleAmountItem(id: string, amountItem: number) {
        const newItems = itemsInCart.map(item => item.id === id ? {
            ...item,
            amount: amountItem
        } : item)
        setItemsInCart(newItems)
    }

    return (
        <ItemsCartContext.Provider value={{ itemsInCart, addItemsToCart, removeItemsFromCart, handleAmountItem, priceTotal }}>
            {children}
        </ItemsCartContext.Provider>
    )
}