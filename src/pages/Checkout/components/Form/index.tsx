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
import { useNavigate } from "react-router-dom";
import { FormDataContext } from "../../../../contexts/FormDataDeliveryContext";

export function Form() {
    const methods = useContext(FormDataContext);
    const { register, handleSubmit } = methods.methods;

    const navigate = useNavigate()

    function addressOrder() {
        console.log(methods.methods.getValues())
        navigate("/sucess")
    }

    return (
        <Container>
            <TitleXSContainer>
                <TitleXS>
                    Complete seu pedido
                </TitleXS>
            </TitleXSContainer>

            <FormContainer id="FormDataDelivery" onSubmit={handleSubmit(addressOrder)} action="">
                <DeliveryFieldsContainer>
                    <Header
                        textRegularM={"Endereço de Entrega"}
                        textRegularS={"Informe o endereço onde deseja receber seu pedido"}
                        icon={"MapPinLine"}
                    />
                    <InputContainer>
                        <Input id="cep" {...register("cep")} placeholder="CEP" width={'35%'} required />
                        <Input id="street" {...register("street")} placeholder="Rua" width={'100%'} required />
                        <InputFlex>
                            <Input id="number" {...register("number")} type="number" placeholder="Número" width={'35%'} required />
                            <Input id="complement" {...register("complement")} placeholder="Complemento" width={'65%'} required />
                        </InputFlex>
                        <InputFlex>
                            <Input id="district" {...register("district")} placeholder="Bairro" width={'36%'} required />
                            <Input id="city" {...register("city")} placeholder="Cidade" width={'54%'} required />
                            <Input id="state" {...register("state")} placeholder="UF" width={'10%'} required />
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