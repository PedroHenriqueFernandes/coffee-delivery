import { Trash } from "phosphor-react";
import { useContext } from "react";
import { ItemsCartContext } from "../../../contexts/ItemsCartContext";
import { ComponentsButtonS } from "../../../styles/fonts";
import { ButtonRemoveContainer } from "./styles";

interface ButtonRemoveProps {
    id: string;
}

export function ButtonRemove({id}: ButtonRemoveProps) {
    const { removeItemsFromCart } = useContext(ItemsCartContext);
    function handleRemoveItemsFromCart(){
        removeItemsFromCart(id)
    }
    return (
        <ButtonRemoveContainer onClick={handleRemoveItemsFromCart}>
            <Trash />
            <ComponentsButtonS>
                REMOVER
            </ComponentsButtonS>
        </ButtonRemoveContainer>
    )
}