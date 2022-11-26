import {
    ContainerTextProduct,
    ItemsCardContainer,
    ItemsCardImage,
    ItemsCardPriceContainer,
    ItemsCardPriceSimbol,
    ItemscardPriceValue,
    ItemsCardSubtitle,
    ItemsCardTitle,
    ItemsFooter,
    ProductAmountContainer,
    ProductCartButton,
    ProductIconCount,
    ProductType
} from "./styles";
import expressoTradicional from "../../../../assets/products/expresso-tradicional.png";
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";

export function ItemsCard() {
    return (
        <ItemsCardContainer>
            <ItemsCardImage src={expressoTradicional} />
            <ProductType>
                TRADICIONAL
            </ProductType>
            <ContainerTextProduct>
                <ItemsCardTitle>
                    Expresso Tradicional
                </ItemsCardTitle>
                <ItemsCardSubtitle>
                    O tradicional café feito com água quente e grãos moídos
                </ItemsCardSubtitle>
            </ContainerTextProduct>
            <ItemsFooter>
                <ItemsCardPriceContainer>
                    <ItemsCardPriceSimbol>
                        R$
                    </ItemsCardPriceSimbol>
                    <ItemscardPriceValue>
                        9,90
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
        </ItemsCardContainer>
    )
}