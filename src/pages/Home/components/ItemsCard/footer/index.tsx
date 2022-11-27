
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { ItemsCardPriceContainer, ItemsCardPriceSimbol, ItemscardPriceValue, ItemsFooter, ProductAmountContainer, ProductCartButton, ProductIconCount } from "./styles";

interface FooterProps {
    value: string;
}

export function Footer({value}: FooterProps){
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
                    <ProductIconCount>
                        <Minus size={14} weight="bold" />
                    </ProductIconCount>
                    <input type="number" defaultValue={1} />
                    <ProductIconCount>
                        <Plus size={14} weight="fill"/>
                    </ProductIconCount>
                </ProductAmountContainer>

                <ProductCartButton>
                    <ShoppingCartSimple size={20} weight="fill" />
                </ProductCartButton>
            </ItemsFooter>
    )
}