import { useContext, useState } from "react"
import { TextBoldM, TextRegularM } from "../../../../../../styles/fonts";
import { ButtonRemove } from "../../../../../../components/Buttons/Remove";
import { ItemsCartContext } from "../../../../../../contexts/ItemsCartContext"
import { ButtonAmountItems } from "../../../../../../components/Buttons/AmountItems";

import { 
    ButtonsContainer, 
    FunctionalitiesContainer,
    ImageAndFunctionalitiesContainer,
    ImageContainer,
    ItemCartCheckout,
    ItemsCartCheckoutContainer
} from "./styltes";

export function ItemsCartCheckout() {
    const { 
        itemsInCart
    } = useContext(ItemsCartContext)
    
    const [amountItem, setAmountItem] = useState(1);

    return (
        <ItemsCartCheckoutContainer>
            {itemsInCart.map(item => {
                if (item.amount > 0) {
                    return (
                        <div key={item.id}>
                            <ItemCartCheckout>
                                <ImageAndFunctionalitiesContainer>
                                    <ImageContainer>
                                        <img src={item.img} alt="" />
                                    </ImageContainer>
                                    <FunctionalitiesContainer>
                                        <TextRegularM>
                                            {item.title}
                                        </TextRegularM>
                                        <ButtonsContainer>
                                            <ButtonAmountItems amountItem={amountItem} setAmountItem={setAmountItem} />
                                            <ButtonRemove />
                                        </ButtonsContainer>

                                    </FunctionalitiesContainer>
                                </ImageAndFunctionalitiesContainer>
                                <TextBoldM>
                                    R$ {(item.amount * 9.9).toFixed(2)}
                                </TextBoldM>
                            </ItemCartCheckout>
                            <hr />
                        </div>
                    )
                }
            })
            }
        </ItemsCartCheckoutContainer>
    )
}