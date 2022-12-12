import { TitleXS } from "../../../../styles/fonts";
import { Header } from "./components/Header";
import { PaymentMethod } from "./components/PaymentMethod";
import { FormContainer, Container, TitleXSContainer, Input, InputContainer, InputFlex, DeliveryFieldsContainer, PaymentMethodsFieldsContainer } from "./styles";

export function Form() {
    return (
        <Container>
            <TitleXSContainer>
                <TitleXS>
                    Complete seu pedido
                </TitleXS>
            </TitleXSContainer>

            <FormContainer>
                <DeliveryFieldsContainer>
                    <Header
                        textRegularM={"Endereço de Entrega"}
                        textRegularS={"Informe o endereço onde deseja receber seu pedido"}
                        icon={"MapPinLine"}
                    />
                    <InputContainer>
                        <Input placeholder="CEP" width={'12.5rem'} />
                        <Input placeholder="Rua" width={'100%'} />
                        <InputFlex>
                            <Input placeholder="Número" width={'12.5rem'} />
                            <Input placeholder="Complemento" width={'21.75rem'} />
                        </InputFlex>
                        <InputFlex>
                            <Input placeholder="Bairro" width={'12.5rem'} />
                            <Input placeholder="Cidade" width={'17.25rem'} />
                            <Input placeholder="UF" width={'3.75rem'} />
                        </InputFlex>
                    </InputContainer>
                </DeliveryFieldsContainer>

                <PaymentMethodsFieldsContainer>
                    <Header
                        textRegularM={"Pagamento"}
                        textRegularS={"O pagamento é feito na entrega. Escolha a forma que deseja pagar"}
                    />
                    <PaymentMethod />
                </PaymentMethodsFieldsContainer>
            </FormContainer>
        </Container>
    )
}