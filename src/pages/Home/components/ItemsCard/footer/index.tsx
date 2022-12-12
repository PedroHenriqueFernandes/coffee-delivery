
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { useContext, useState, ChangeEvent } from "react";
import { ItemsCartContext } from "../../../../../contexts/ItemsCartContext";
import { ItemsCardPriceContainer, ItemsCardPriceSimbol, ItemscardPriceValue, ItemsFooter, ProductAmountContainer, ProductCartButton, ProductIconCount } from "./styles";

interface FooterProps {
    id: string;
    type: string;
    type2?: string;
    type3?: string;
    img: string;
    title: string;
    subtitle: string;
    amount: number;
    value: string;
}

export function Footer({
    id,
    type,
    type2,
    type3,
    img,
    title,
    subtitle,
    value
}: FooterProps){
    const [amountItem, setAmountItem] = useState(1);
    const {addItemsToCart} = useContext(ItemsCartContext)

    function lowerAmount(){
        if(amountItem > 1){
            setAmountItem(amountItem - 1);
        }
    }

    function increaseAmount(){
        setAmountItem(amountItem + 1);
    }

    function addItemsToCartButton(){
        addItemsToCart({
            id: id,
            type: type,
            type2: type2,
            type3: type3,
            img: img,
            title: title,
            subtitle: subtitle,
            amount: amountItem,
        })
    }

    function handleamountItems(event: ChangeEvent<HTMLInputElement>){
        setAmountItem(Number(event.target.value));
    }

    return(
        <ItemsFooter>
                <ItemsCardPriceContainer>
                    <ItemsCardPriceSimbol>
                        R$
                    </ItemsCardPriceSimbol>
                    <ItemscardPriceValue>
                        {value}
                    </ItemscardPriceValue>
                </ItemsCardPriceContainer>

                <ProductAmountContainer>
                    <ProductIconCount onClick={lowerAmount}>
                        <Minus size={14} weight="bold"/>
                    </ProductIconCount>
                        <input type="number" value={amountItem} onChange={handleamountItems} />
                    <ProductIconCount onClick={increaseAmount}>
                        <Plus size={14} weight="fill"/>
                    </ProductIconCount>
                </ProductAmountContainer>

                <ProductCartButton onClick={addItemsToCartButton}>
                    <ShoppingCartSimple size={20} weight="fill" />
                </ProductCartButton>
            </ItemsFooter>
    )
}