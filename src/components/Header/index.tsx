import { Cart, HeaderContainer } from "./styles";
import logoCoffeDelivery from "../../assets/logo-coffe-delivery.svg"
import { ShoppingCartSimple } from "phosphor-react";

export function Header(){
    return(
        <HeaderContainer>
            <img src={logoCoffeDelivery} alt="" />
            <Cart>
                <ShoppingCartSimple color={"#C47F17"} weight="fill" size={16}/>
            </Cart>
        </HeaderContainer>
    )
}