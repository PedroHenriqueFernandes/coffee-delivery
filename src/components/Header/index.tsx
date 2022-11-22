import { Cart, HeaderContainer } from "./styles";
import logoCoffeDelivery from "../../assets/logo-coffe-delivery.svg"
import { ShoppingCartSimple } from "phosphor-react";

export function Header(){
    return(
        <HeaderContainer>
            <img src={logoCoffeDelivery} alt="" />
            <Cart>
                <ShoppingCartSimple color="red" height={16} width={16}/>
            </Cart>
        </HeaderContainer>
    )
}