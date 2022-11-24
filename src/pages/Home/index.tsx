import { CoffeeArt, IntroContainer, IntroTextContainer, IntroTitle } from "./styles";
import coffeImage from "../../assets/coffee-art.png"

export function Home(){
    return (
        <IntroContainer>
            <IntroTextContainer>
                <IntroTitle>
                    Encontre o café perfeito para qualquer hora do dia
                </IntroTitle>
            </IntroTextContainer>
            <CoffeeArt>
                <img src={coffeImage} alt="" />
            </CoffeeArt>
        </IntroContainer>
    )
}