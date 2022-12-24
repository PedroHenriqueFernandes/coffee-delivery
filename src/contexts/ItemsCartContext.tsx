import { createContext, ReactNode, useState } from "react";

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
}

export const ItemsCartContext = createContext({} as ItemsCartContext);

export function ItemsCartProvider({ children }: ItemsCartProviderProps) {
    const [itemsInCart, setItemsInCart] = useState([{amount: 0, price: 9.9} as ItemsCart])

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

    return (
        <ItemsCartContext.Provider value={{ itemsInCart, addItemsToCart, removeItemsFromCart }}>
            {children}
        </ItemsCartContext.Provider>
    )
}