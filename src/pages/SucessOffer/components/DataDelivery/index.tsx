import { TextRegularL, TitleL } from "../../../../styles/fonts";
import { DataAddessDelivery } from "./components/DataAddressDelivery";
import { Container, TextContainer } from "./styles";

export function DataDelivery() {
    return (
        <Container>
            <TextContainer>
                <TitleL>
                    Uhu! Pedido confirmado
                </TitleL>
                <TextRegularL>
                    Agora é só aguardar que logo o café chegará até você.
                </TextRegularL>
            </TextContainer>

            <DataAddessDelivery />
        </Container>
    )
}