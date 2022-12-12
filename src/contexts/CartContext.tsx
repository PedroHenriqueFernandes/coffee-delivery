import { ReactNode, useState } from "react";

interface CartContextProvider {
    children: ReactNode;
}

export function CartContext({children}: CartContextProvider){
    const [amountItem, setAmountItem] = useState(0);
    const [amountItemsIncart, setAmountItemsIncart] = useState(0);

    return (
        <>
            
        </>
    )
}