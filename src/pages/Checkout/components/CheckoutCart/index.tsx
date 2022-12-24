import { TitleXS } from "../../../../styles/fonts";
import { ItemsCartCheckout } from "./components/ItemsCartCheckout";
import { OrderSumary } from "./components/OrderSummary";
import { CheckoutContainer, TitleXSContainer } from "./styles";

export function CheckoutCart() {
    return (
        <CheckoutContainer>
            <TitleXSContainer>
                <TitleXS>
                    Café selecionados
                </TitleXS>
            </TitleXSContainer>

            <ItemsCartCheckout />

            <OrderSumary />
        </CheckoutContainer>
    )
}