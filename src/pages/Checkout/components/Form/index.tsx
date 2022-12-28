import { useContext, useEffect, useState } from "react";
import { FormContext } from "../../../../contexts/dataDelivery";
import { TitleXS } from "../../../../styles/fonts";
import { Header } from "./components/Header";
import { PaymentMethod } from "./components/PaymentMethod";
import { FormContainer, Container, TitleXSContainer, Input, InputContainer, InputFlex, DeliveryFieldsContainer, PaymentMethodsFieldsContainer } from "./styles";

export function Form() {
    const { dataDelivery, handleDataDelivery } = useContext(FormContext)

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
                        <Input placeholder="CEP" width={'35%'} />
                        <Input placeholder="Rua" width={'100%'} />
                        <InputFlex>
                            <Input placeholder="Número" width={'35%'} />
                            <Input placeholder="Complemento" width={'65%'} />
                        </InputFlex>
                        <InputFlex>
                            <Input placeholder="Bairro" width={'36%'} />
                            <Input placeholder="Cidade" width={'54%'} />
                            <Input placeholder="UF" width={'10%'} />
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