import { useContext, useState } from "react";
import { ButtonRemove } from "../../../../components/Buttons/Remove";
import { ItemsCartContext } from "../../../../contexts/ItemsCartContext";
import { TextBoldM, TextRegularM, TitleXS } from "../../../../styles/fonts";
import { Button } from "../../../Home/components/ItemsCard/footer/components/Button";
import { CheckoutContainer, FunctionalitiesContainer, ImageAndFunctionalitiesContainer, ImageContainer, ItemCartCheckout, ItemsCartCheckout, TitleXSContainer } from "./styles";

export function CheckoutCart() {
    const { itemsInCart, addItemsToCart, removeItemsFromCart } = useContext(ItemsCartContext)
    const [amountItem, setAmountItem] = useState(1);



    return (
        <CheckoutContainer>
            <TitleXSContainer>
                <TitleXS>
                    Café selecionados
                </TitleXS>
            </TitleXSContainer>

            <ItemsCartCheckout>
                {itemsInCart.map(item => {
                    if (item.amount > 0) {
                        return (
                            <>
                                <ItemCartCheckout>
                                    <ImageAndFunctionalitiesContainer>
                                        <ImageContainer>
                                            <img src={item.img} alt="" />
                                        </ImageContainer>
                                        <FunctionalitiesContainer>
                                            <TextRegularM>
                                                {item.title}
                                            </TextRegularM>
                                            <Button amountItem={amountItem} setAmountItem={setAmountItem} />
                                            <ButtonRemove />
                                        </FunctionalitiesContainer>
                                    </ImageAndFunctionalitiesContainer>
                                    <TextBoldM>
                                        R$ {(item.amount * 9.9).toFixed(2)}
                                    </TextBoldM>
                                </ItemCartCheckout>
                                <hr />
                            </>
                        )
                    }
                })
                }
            </ItemsCartCheckout>
        </CheckoutContainer>
    )
}