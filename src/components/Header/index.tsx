import {
    Cart,
    HeaderContainer,
    Location,
    CartAndLocationContainer,
    BackgroundItemsInCart,
    AmountItemsInCart
} from "./styles";
import logoCoffeDelivery from "../../assets/logo-coffe-delivery.svg"
import { MapPin, ShoppingCartSimple } from "phosphor-react";
import { useContext } from "react";
import { ItemsCartContext } from "../../contexts/ItemsCartContext";
import { NavLink } from "react-router-dom";

export function Header() {
    const { itemsInCart } = useContext(ItemsCartContext)
    let amountItemsInCart = 0;
    if (itemsInCart.length > 0) {
        {
            itemsInCart.map(item => {
                return (
                    amountItemsInCart += item.amount
                )
            })
        }
    } else {
        0
    }

    return (
        <HeaderContainer>
            <img src={logoCoffeDelivery} alt="" />
            <CartAndLocationContainer>
                <Location >
                    <MapPin width={16} weight="fill" />
                    <span>Franca, SP</span>
                </Location>
                <nav>
                    <NavLink to="/checkout" title="Checkout">
                        <Cart>
                            <ShoppingCartSimple weight="fill" size={16} />
                            <BackgroundItemsInCart>
                                <AmountItemsInCart >
                                    {
                                        amountItemsInCart
                                    }
                                </AmountItemsInCart>
                            </BackgroundItemsInCart>
                        </Cart>
                    </NavLink>
                </nav>
            </CartAndLocationContainer>
        </HeaderContainer>
    )
}