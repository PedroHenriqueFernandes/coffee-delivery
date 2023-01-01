import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { FormDataContext } from "../../../../../../contexts/FormDataDeliveryContext";
import { TextBoldM, TextBoldMSpan, TextRegularM, TextRegularMSpan } from "../../../../../../styles/fonts";
import { Container, Content, InfoContainer, InfoIcon } from "./styles";

export function DataAddessDelivery() {
    const methods = useContext(FormDataContext);
    const values = methods.methods.getValues();
    const space = " ";
    return (
        <Container>
            <Content>
                <InfoContainer>
                    <InfoIcon TypeInfo="address">
                        <MapPin width={16} weight="fill" />
                    </InfoIcon>
                    <span>
                        <TextRegularMSpan>
                            Entrega em {space}
                        </TextRegularMSpan>
                        <TextBoldMSpan>
                            {values.street}, {Number(values.number)}
                        </TextBoldMSpan>
                        <TextRegularM>
                            {space}{values.district} - {values.city}, {values.state}
                        </TextRegularM>
                    </span>
                </InfoContainer>

                <InfoContainer>
                    <InfoIcon TypeInfo="deliveryTime">
                        <Timer width={16} weight="fill" />
                    </InfoIcon>
                    <div>
                        <TextRegularM>
                            Previsão de entrega
                        </TextRegularM>
                        <TextBoldM>
                            20 min - 30 min
                        </TextBoldM>
                    </div>
                </InfoContainer>

                <InfoContainer>
                    <InfoIcon TypeInfo="paymentMethod">
                        <CurrencyDollar width={16} weight="fill" />
                    </InfoIcon>
                    <div>
                        <TextRegularM>
                            Pagamento na entrega
                        </TextRegularM>
                        <TextBoldM>
                            {values.paymentMethod}
                        </TextBoldM>
                    </div>
                </InfoContainer>
            </Content>
        </Container>
    )
}