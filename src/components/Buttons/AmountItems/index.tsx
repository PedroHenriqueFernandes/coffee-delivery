import { Minus, Plus } from "phosphor-react";
import { ChangeEvent, useContext } from "react";
import { ItemsCartContext } from "../../../contexts/ItemsCartContext";
import { ProductAmountContainer, ProductIconCount } from "./styles";

interface ButtonProps {
    amountItem: number;
    setAmountItem: (amountItem: number) => void | null;
    id?: string;
}

export function ButtonAmountItems({amountItem, setAmountItem, id}: ButtonProps) {
    const { handleAmountItem } = useContext(ItemsCartContext);

    function lowerAmount(){
        if(amountItem > 1){
            setAmountItem(amountItem - 1);
        }
        if(id){
            handleAmountItem(id, amountItem);
        }
    }

    function increaseAmount(){
        setAmountItem(amountItem + 1);
        if(id){
            handleAmountItem(id, amountItem);
        }
    }

    function handleamountItems(event: ChangeEvent<HTMLInputElement>){
        setAmountItem(Number(event.target.value));
        if(id){
            handleAmountItem(id, Number(event.target.value));
        }
    }
    

    return (
        <ProductAmountContainer>
            <ProductIconCount onClick={lowerAmount}>
                <Minus size={14} weight="bold" />
            </ProductIconCount>
            <input type="number" value={amountItem} onChange={handleamountItems} />
            <ProductIconCount onClick={increaseAmount}>
                <Plus size={14} weight="fill" />
            </ProductIconCount>
        </ProductAmountContainer>
    )
}