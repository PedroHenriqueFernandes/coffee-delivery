import {
    CoffeeArt,
    IntroContainer,
    IntroItem,
    IntroItems,
    IconItemsIntro,
    IntroText,
    IntroTextContainer,
    IntroTitle,
} from "./styles";

import coffeImage from "../../assets/coffee-art.png"
import { ShoppingCartSimple } from "phosphor-react";

export function Home() {
    return (
        <IntroContainer>
            <IntroTextContainer>
                <IntroTitle>
                    Encontre o café perfeito para qualquer hora do dia
                </IntroTitle>
                <IntroText>
                    Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                </IntroText>
                <IntroItems>
                    <IntroItem>
                        <IconItemsIntro>
                            <ShoppingCartSimple weight="fill" size={14} />
                        </IconItemsIntro>
                        Compra simples e segura
                    </IntroItem>
                </IntroItems>
            </IntroTextContainer>
            <CoffeeArt>
                <img src={coffeImage} alt="" />
            </CoffeeArt>
        </IntroContainer>
    )
}