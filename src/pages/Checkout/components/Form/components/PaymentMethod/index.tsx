import { PaymentMethodContainer, PaymentMethods } from "./styles";
import { CreditCard, Bank, Money } from "phosphor-react"
import { ComponentsButtonS } from "../../../../../../styles/fonts";
import { useState } from "react";

export function PaymentMethod(){
    const [method, setMethod] = useState('')

    function handleMethodCreditCard(){
        setMethod("CARTÃO DE CRÉDITO")
    }

    function handleMethodDebitCard(){
        setMethod("CARTÃO DE DÉBITO")
    }

    function handleMethodMoney(){
        setMethod("DINHEIRO")
    }
    
    return (
        <PaymentMethodContainer>
            <PaymentMethods onClick={handleMethodCreditCard} >
                <CreditCard size={16} /> 
                <ComponentsButtonS>
                    CARTÃO DE CRÉDITO
                </ComponentsButtonS>
            </PaymentMethods>
            <PaymentMethods>
                <Bank size={16} /> 
                <ComponentsButtonS onClick={handleMethodDebitCard}>
                    CARTÃO DE DÉBITO
                </ComponentsButtonS>
            </PaymentMethods>
            <PaymentMethods>
                <Money size={16} /> 
                <ComponentsButtonS onClick={handleMethodMoney}>
                    DINHEIRO
                </ComponentsButtonS>
            </PaymentMethods>
        </PaymentMethodContainer>
    )
}