import { useContext, useEffect, useState } from "react";
import { FormContext } from "../../../../contexts/dataDelivery";
import { TitleXS } from "../../../../styles/fonts";
import { Header } from "./components/Header";
import { PaymentMethod } from "./components/PaymentMethod";
import { FormContainer, Container, TitleXSContainer, Input, InputContainer, InputFlex, DeliveryFieldsContainer, PaymentMethodsFieldsContainer } from "./styles";

export function Form() {
    const { dataDelivery, handleDataDelivery } = useContext(FormContext)
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')

    useEffect(() => {
        handleDataDelivery({
            cep: cep,
            rua: rua,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            numero: numero,
            complemento: complemento
        })
    }, [cep, rua, bairro, cidade, estado, numero, complemento])

    function handleCep(e: React.ChangeEvent<HTMLInputElement>) {
        setCep(e.target.value)
    }

    function handleRua(e: React.ChangeEvent<HTMLInputElement>) {
        setRua(e.target.value)
    }

    function handleBairro(e: React.ChangeEvent<HTMLInputElement>) {
        setBairro(e.target.value)
    }

    function handleCidade(e: React.ChangeEvent<HTMLInputElement>) {
        setCidade(e.target.value)
    }

    function handleEstado(e: React.ChangeEvent<HTMLInputElement>) {
        setEstado(e.target.value)
    }

    function handleNumero(e: React.ChangeEvent<HTMLInputElement>) {
        setNumero(e.target.value)
    }

    function handleComplemento(e: React.ChangeEvent<HTMLInputElement>) {
        setComplemento(e.target.value)
    }

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
                        <Input placeholder="CEP" width={'35%'} value={cep} onChange={handleCep} />
                        <Input placeholder="Rua" width={'100%'} value={rua} onChange={handleRua} />
                        <InputFlex>
                            <Input placeholder="Número" width={'35%'} value={numero} onChange={handleNumero} />
                            <Input placeholder="Complemento" width={'65%'} value={complemento} onChange={handleComplemento} />
                        </InputFlex>
                        <InputFlex>
                            <Input placeholder="Bairro" width={'36%'} value={bairro} onChange={handleBairro} />
                            <Input placeholder="Cidade" width={'54%'} value={cidade} onChange={handleCidade} />
                            <Input placeholder="UF" width={'10%'} value={estado} onChange={handleEstado} />
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