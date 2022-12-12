import { MapPinLine } from "phosphor-react";
import { TextRegularM, TextRegularS } from "../../../../../../styles/fonts";
import { InfoFormContainer } from "./styles";

export function Header() {
    return (
        <InfoFormContainer>
            <MapPinLine size={22} />
            <div>
                <TextRegularM>
                    Endereço de Entrega
                </TextRegularM>
                <TextRegularS>
                    Informe o endereço onde deseja receber seu pedido
                </TextRegularS>
            </div>
        </InfoFormContainer>
    )
}