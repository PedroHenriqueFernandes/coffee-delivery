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

export function Home(){
    return (
        <IntroContainer>
            <IntroTextContainer>
                <IntroTitle>
                    Encontre o café perfeito para qualquer hora do dia
                </IntroTitle>
                <IntroText>
                Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                </IntroText>
            </IntroTextContainer>
            <IntroItems>
                <IntroItem>
                    <IconItemsIntro>
                        
                    </IconItemsIntro>
                </IntroItem>
            </IntroItems>
            <CoffeeArt>
                <img src={coffeImage} alt="" />
            </CoffeeArt>
        </IntroContainer>
    )
}