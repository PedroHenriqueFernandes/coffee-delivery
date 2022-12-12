import { TitleXS } from "../../../../styles/fonts";
import { Header } from "./components/Header";
import { FormContainer, Container, TitleXSContainer, Input, InputContainer, InputFlex } from "./styles";

export function Form() {
    return (
        <Container>
            <TitleXSContainer>
                <TitleXS>
                    Complete seu pedido
                </TitleXS>
            </TitleXSContainer>

            <FormContainer>
                <Header />
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
            </FormContainer>
        </Container>
    )
}