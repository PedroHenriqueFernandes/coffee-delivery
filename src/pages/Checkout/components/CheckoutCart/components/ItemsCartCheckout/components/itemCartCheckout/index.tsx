import { useContext, useState } from "react";
import { ButtonAmountItems } from "../../../../../../../../components/Buttons/AmountItems";
import { ButtonRemove } from "../../../../../../../../components/Buttons/Remove";
import { ItemsCartContext } from "../../../../../../../../contexts/ItemsCartContext";
import { TextBoldM, TextRegularM } from "../../../../../../../../styles/fonts";
import { ButtonsContainer, FunctionalitiesContainer, ImageAndFunctionalitiesContainer, ImageContainer, ItemCartCheckoutContainer } from "./styltes";

interface ItemCartCheckoutProps {
    id: string;
    img: string;
    title: string;
    amount: number;
}

export function ItemCartCheckout({ id, img, title, amount }: ItemCartCheckoutProps) {
    const [amountItem, setAmountItem] = useState(amount);

    return (
        <ItemCartCheckoutContainer>
            <ImageAndFunctionalitiesContainer>
                <ImageContainer>
                    <img src={img} alt="" />
                </ImageContainer>
                <FunctionalitiesContainer>
                    <TextRegularM>
                        {title}
                    </TextRegularM>
                    <ButtonsContainer>
                        <ButtonAmountItems screenCheckout amountItem={amountItem} setAmountItem={setAmountItem} id={id} />
                        <ButtonRemove />
                    </ButtonsContainer>
                </FunctionalitiesContainer>
            </ImageAndFunctionalitiesContainer>
            <TextBoldM>
                R$ {(amountItem * 9.9).toFixed(2)}
            </TextBoldM>
        </ItemCartCheckoutContainer>
    )
}