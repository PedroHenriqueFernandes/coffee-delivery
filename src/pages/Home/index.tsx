import {
    CoffeeArt,
    IntroContainer,
    IntroItem,
    IntroItems,
    IconItemsIntroYellow,
    IntroText,
    IntroTextContainer,
    IntroTitle,
    IconItemsIntroGray,
    IconItemsIntroYellowLight,
    IconItemsIntroPurple,
    IntroItemLeft,
    IntroItemRight,
} from "./styles";

import coffeImage from "../../assets/coffee-art.png"
import { Coffee, Package, ShoppingCartSimple, Timer } from "phosphor-react";
import { Products } from "./components/Products";

export function Home() {
    return (
        <>
            <IntroContainer>
                <IntroTextContainer>
                    <IntroTitle>
                        Encontre o café perfeito para qualquer hora do dia
                    </IntroTitle>
                    <IntroText>
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </IntroText>
                    <IntroItems>
                        <IntroItemLeft>
                            <IntroItem>
                                <IconItemsIntroYellow>
                                    <ShoppingCartSimple weight="fill" size={14} />
                                </IconItemsIntroYellow>
                                Compra simples e segura
                            </IntroItem>
                            <IntroItem>
                                <IconItemsIntroYellowLight>
                                    <Timer weight="fill" size={14} />
                                </IconItemsIntroYellowLight>
                                Entrega rápida e rastreada
                            </IntroItem>
                        </IntroItemLeft>
                        <IntroItemRight>
                            <IntroItem>
                                <IconItemsIntroGray>
                                    <Package weight="fill" size={14} />
                                </IconItemsIntroGray>
                                Embalagem mantém o café intacto
                            </IntroItem>

                            <IntroItem>
                                <IconItemsIntroPurple>
                                    <Coffee weight="fill" size={14} />
                                </IconItemsIntroPurple>
                                O café chega fresquinho até você
                            </IntroItem>
                        </IntroItemRight>
                    </IntroItems>
                </IntroTextContainer>
                <CoffeeArt>
                    <img src={coffeImage} alt="" />
                </CoffeeArt>
            </IntroContainer>
            <Products />
        </>
    )
}