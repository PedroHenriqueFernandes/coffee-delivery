import { IllustrationContainer } from "./styles";
import illustration from "../../../../assets/Illustration.svg"

export function Illustration(){
    return(
        <IllustrationContainer>
            <img src={illustration} alt="Ilustração de um homem segurando um café" />
        </IllustrationContainer>
    )
}