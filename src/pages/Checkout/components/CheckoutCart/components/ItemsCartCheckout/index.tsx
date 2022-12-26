import { useContext, useState } from "react"
import { ItemsCartContext } from "../../../../../../contexts/ItemsCartContext"

import {
    ItemsCartCheckoutContainer
} from "./styltes";
import { ItemCartCheckout } from "./components/itemCartCheckout";

export function ItemsCartCheckout() {
    const { 
        itemsInCart
    } = useContext(ItemsCartContext)

    return (
        <ItemsCartCheckoutContainer>
            {itemsInCart.map(item => {
                if (item.amount > 0) {
                    return (
                        <div key={item.id}>
                            <ItemCartCheckout id={item.id} img={item.img} amount={item.amount} title={item.title} />
                            <hr />
                        </div>
                    )
                }
            })
            }
        </ItemsCartCheckoutContainer>
    )
}