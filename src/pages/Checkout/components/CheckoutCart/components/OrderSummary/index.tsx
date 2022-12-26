import { useContext, useEffect, useState } from "react"
import { ConfirmOffer } from "../../../../../../components/Buttons/ConfirmOffer"
import { ItemsCartContext } from "../../../../../../contexts/ItemsCartContext"
import { TextBoldL, TextRegularS } from "../../../../../../styles/fonts"
import { ContainerTexts, OrderSumaryContainer } from "./styltes"

export function OrderSumary() {
    const { itemsInCart } = useContext(ItemsCartContext)
    const [priceTotal, setPriceTotal] = useState(0)

    useEffect(() => {
        setPriceTotal(itemsInCart.map(item => item.price).reduce((a, b) => a + b, -9.9))
    }, [itemsInCart])

    return (
        <OrderSumaryContainer>
            <ContainerTexts>
                <TextRegularS>
                    Total de itens:
                </TextRegularS>
                <TextRegularS>
                    R$ {priceTotal.toFixed(2).toString().replace('.', ',')}
                </TextRegularS>
            </ContainerTexts>

            <ContainerTexts>
                <TextRegularS>
                    Entrega
                </TextRegularS>
                <TextRegularS>
                    R$ 3,50
                </TextRegularS>
            </ContainerTexts>

            <ContainerTexts>
                <TextBoldL>
                    Total
                </TextBoldL>
                <TextBoldL>
                    R$ {(priceTotal + 3.5).toFixed(2).toString().replace('.', ',')}
                </TextBoldL>
            </ContainerTexts>

            <ConfirmOffer />
        </OrderSumaryContainer>
    )
}