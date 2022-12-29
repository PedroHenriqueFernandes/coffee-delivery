import { ComponentsButtonG } from "../../../styles/fonts";
import { ContainerButtons } from "./styltes";
import { useContext } from "react";
import { ItemsCartContext } from "../../../contexts/ItemsCartContext";

export function ConfirmOffer(){
    const { 
        itemsInCart
    } = useContext(ItemsCartContext)

    const amountItemsInCart = itemsInCart.reduce((acc, item) => {
        return acc + item.amount
    }, 0)

    const cartIsEmpty = amountItemsInCart === 0 ? true : false

    return(
        <ContainerButtons type="submit" form="FormDataDelivery" disabled={cartIsEmpty}>
            <ComponentsButtonG>
                CONFIRMAR PEDIDO
            </ComponentsButtonG>
        </ContainerButtons>
    )
}