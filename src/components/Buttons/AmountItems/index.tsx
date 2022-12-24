import { Minus, Plus } from "phosphor-react";
import { ChangeEvent } from "react";
import { ProductAmountContainer, ProductIconCount } from "./styles";

interface ButtonProps {
    setAmountItem: (amountItem: number) => void;
    amountItem: number;
}

export function ButtonAmountItems({amountItem, setAmountItem}: ButtonProps) {
    function lowerAmount(){
        if(amountItem > 1){
            setAmountItem(amountItem - 1);
        }
    }

    function increaseAmount(){
        setAmountItem(amountItem + 1);
    }

    function handleamountItems(event: ChangeEvent<HTMLInputElement>){
        setAmountItem(Number(event.target.value));
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