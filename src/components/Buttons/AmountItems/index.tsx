import { Minus, Plus } from "phosphor-react";
import { ChangeEvent, useContext } from "react";
import { ItemsCartContext } from "../../../contexts/ItemsCartContext";
import { ProductAmountContainer, ProductIconCount, ProductIconCountScreenCheckout } from "./styles";

interface ButtonProps {
    amountItem: number;
    setAmountItem: (amountItem: number) => void | null;
    id?: string;
    screenCheckout?: boolean;
}

export function ButtonAmountItems({ amountItem, setAmountItem, id, screenCheckout }: ButtonProps) {
    const { handleAmountItem } = useContext(ItemsCartContext);

    function lowerAmount() {
        if (amountItem > 1) {
            setAmountItem(amountItem - 1);
            if (id) {
                handleAmountItem(id, amountItem - 1);
            }
        }
    }

    function increaseAmount() {
        setAmountItem(amountItem + 1);
        if (id) {
            handleAmountItem(id, amountItem + 1);
        }
    }

    function handleamountItems(event: ChangeEvent<HTMLInputElement>) {
        setAmountItem(Number(event.target.value));
        if (id) {
            handleAmountItem(id, Number(event.target.value));
        }
    }


    return (
        <>
            {screenCheckout ? (
                <ProductAmountContainer>
                    <ProductIconCountScreenCheckout onClick={lowerAmount}>
                        <Minus size={14} weight="bold" />
                    </ProductIconCountScreenCheckout>
                    <input type="number" value={amountItem} onChange={handleamountItems} />
                    <ProductIconCountScreenCheckout onClick={increaseAmount}>
                        <Plus size={14} weight="fill" />
                    </ProductIconCountScreenCheckout>
                </ProductAmountContainer>
            ) : (
                <ProductAmountContainer>
                    <ProductIconCount onClick={lowerAmount}>
                        <Minus size={14} weight="bold" />
                    </ProductIconCount>
                    <input type="number" value={amountItem} onChange={handleamountItems} />
                    <ProductIconCount onClick={increaseAmount}>
                        <Plus size={14} weight="fill" />
                    </ProductIconCount>
                </ProductAmountContainer>
            )}
        </>
    )
}