
import { ShoppingCartSimple } from "phosphor-react";
import { useContext, useState } from "react";
import { ItemsCartContext } from "../../../../../contexts/ItemsCartContext";
import { Button } from "./components/Button";
import { ItemsCardPriceContainer, ItemsCardPriceSimbol, ItemscardPriceValue, ItemsFooter, ProductCartButton } from "./styles";

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
}: FooterProps) {
    const [amountItem, setAmountItem] = useState(1);
    const { addItemsToCart } = useContext(ItemsCartContext)

    function addItemsToCartButton() {
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

    return (
        <ItemsFooter>
            <ItemsCardPriceContainer>
                <ItemsCardPriceSimbol>
                    R$
                </ItemsCardPriceSimbol>
                <ItemscardPriceValue>
                    {value}
                </ItemscardPriceValue>
            </ItemsCardPriceContainer>


            <Button amountItem={amountItem} setAmountItem={setAmountItem} />


            <ProductCartButton onClick={addItemsToCartButton}>
                <ShoppingCartSimple size={20} weight="fill" />
            </ProductCartButton>
        </ItemsFooter>
    )
}