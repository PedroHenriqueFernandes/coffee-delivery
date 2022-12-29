import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 57%;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
`;

export const DeliveryFieldsContainer = styled.div`
    background-color: ${props => props.theme["card"]};
    border-radius: 6px;
`;

export const PaymentMethodsFieldsContainer = styled.div`
    background-color: ${props => props.theme["card"]};
    border-radius: 6px;
    margin-bottom: 2rem;
`;

export const TitleXSContainer = styled.div`
    padding-top: 30px;
    padding-bottom: 15px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 40px 40px 40px;
`;

export const Input = styled.input`
    height: 2.625rem;
    width: ${props => props.width};
    border: 1px solid ${props => props.theme["button"]};
    border-radius: 4px;
    background: ${props => props.theme["input"]};
    color: ${props => props.theme["label"]};
    padding-left: 0.75rem;

    ::-webkit-input-placeholder {
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        line-height: 1.1375rem;
        font-weight: regular;
    }
    /* Firefox 19+ */
    ::-moz-placeholder {
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        line-height: 1.1375rem;
        font-weight: regular;
    }
    /* IE 10+ */
    :-ms-input-placeholder {
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        line-height: 1.1375rem;
        font-weight: regular;
    }
    /* Firefox 18- */
    :-moz-placeholder {
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        line-height: 1.1375rem;
        font-weight: regular;
    }
`;

export const InputFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 16px;
`;