import { ComponentsButtonG } from "../../../styles/fonts";
import { ContainerButtons } from "./styltes";

export function ConfirmOffer(){
    return(
        <ContainerButtons type="submit" form="FormDataDelivery">
            <ComponentsButtonG>
                CONFIRMAR PEDIDO
            </ComponentsButtonG>
        </ContainerButtons>
    )
}