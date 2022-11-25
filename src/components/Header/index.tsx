import { Cart, HeaderContainer, Location, CartAndLocationContainer } from "./styles";
import logoCoffeDelivery from "../../assets/logo-coffe-delivery.svg"
import { MapPin, ShoppingCartSimple } from "phosphor-react";

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoCoffeDelivery} alt="" />
            <CartAndLocationContainer>
                <Location >
                    <MapPin width={16} weight="fill" />
                    <span>Franca, SP</span>
                </Location>
                <Cart>
                    <ShoppingCartSimple weight="fill" size={16} />
                </Cart>
            </CartAndLocationContainer>
        </HeaderContainer>
    )
}