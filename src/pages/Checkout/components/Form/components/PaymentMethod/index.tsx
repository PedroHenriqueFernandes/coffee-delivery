import { PaymentMethodContainer, PaymentMethods } from "./styles";
import { CreditCard, Bank, Money } from "phosphor-react"
import { ComponentsButtonS } from "../../../../../../styles/fonts";
import { useState } from "react";

export function PaymentMethod(){
    const [method, setMethod] = useState('')

    function handleMethod(){
        setMethod("CARTÃO DE CRÉDITO")
    }
    
    return (
        <PaymentMethodContainer>
            <PaymentMethods onClick={handleMethod}>
                <CreditCard size={16} /> 
                <ComponentsButtonS>
                    CARTÃO DE CRÉDITO
                </ComponentsButtonS>
            </PaymentMethods>
            <PaymentMethods>
                <Bank size={16} /> 
                <ComponentsButtonS>
                    CARTÃO DE DÉBITO
                </ComponentsButtonS>
            </PaymentMethods>
            <PaymentMethods>
                <Money size={16} /> 
                <ComponentsButtonS>
                    DINHEIRO
                </ComponentsButtonS>
            </PaymentMethods>
        </PaymentMethodContainer>
    )
}