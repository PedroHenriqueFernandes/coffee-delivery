import { Header } from "./components/Header";
import { TitleXS } from "../../../../styles/fonts";
import { PaymentMethod } from "./components/PaymentMethod";
import { useFormContext } from "react-hook-form";

import { 
    Input, 
    Container, 
    InputFlex, 
    FormContainer, 
    InputContainer, 
    TitleXSContainer, 
    DeliveryFieldsContainer, 
    PaymentMethodsFieldsContainer 
} from "./styles";
import { useContext } from "react";
import { FormDataContext } from "../../../../contexts/FormDataDeliveryContext";

export function Form() {
    const methods = useContext(FormDataContext);
    const {register} = methods.methods;
    
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
                        <Input id="cep" {...register("cep")} placeholder="CEP" width={'35%'} />
                        <Input id="street" {...register("street")} placeholder="Rua" width={'100%'} />
                        <InputFlex>
                            <Input id="number" {...register("number")} placeholder="Número" width={'35%'} />
                            <Input id="complement" {...register("complement")} placeholder="Complemento" width={'65%'} />
                        </InputFlex>
                        <InputFlex>
                            <Input id="district" {...register("district")} placeholder="Bairro" width={'36%'} />
                            <Input id="city" {...register("city")} placeholder="Cidade" width={'54%'} />
                            <Input id="state" {...register("state")} placeholder="UF" width={'10%'} />
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