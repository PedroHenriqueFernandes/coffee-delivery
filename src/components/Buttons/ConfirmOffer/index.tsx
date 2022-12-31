import { ComponentsButtonG, TextBoldS } from "../../../styles/fonts";
import { Container, ContainerButtons } from "./styltes";
import { useContext, useState } from "react";
import { ItemsCartContext } from "../../../contexts/ItemsCartContext";
import { FormDataContext } from "../../../contexts/FormDataDeliveryContext";

export function ConfirmOffer() {
    const [paymentMethodIsEmpty, setPaymentMethodIsEmpty] = useState("")

    const {
        itemsInCart
    } = useContext(ItemsCartContext)

    const methods = useContext(FormDataContext);

    function handlePaymentMethodIsEmpty() {
        const values = methods.methods.getValues()
        if (values.paymentMethod === undefined) {
            setPaymentMethodIsEmpty("Escolha uma forma de pagamento")
        }
    }

    const amountItemsInCart = itemsInCart.reduce((acc, item) => {
        return acc + item.amount
    }, 0)

    const cartIsEmpty = amountItemsInCart === 0 ? true : false

    return (
        <Container>
            <ContainerButtons onClick={handlePaymentMethodIsEmpty} type="submit" form="FormDataDelivery" disabled={cartIsEmpty}>
                <ComponentsButtonG>
                    CONFIRMAR PEDIDO
                </ComponentsButtonG>

            </ContainerButtons>
            <TextBoldS>
                {paymentMethodIsEmpty}
            </TextBoldS>
        </Container>
    )
}