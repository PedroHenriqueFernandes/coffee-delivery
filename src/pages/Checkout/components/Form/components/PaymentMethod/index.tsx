import { PaymentMethodContainer, PaymentMethods } from "./styles";
import { CreditCard, Bank, Money } from "phosphor-react"
import { ComponentsButtonS } from "../../../../../../styles/fonts";
import { useState } from "react";

export function PaymentMethod() {
    const [method, setMethod] = useState('')
    const [methodCreditCard, setMethodCreditCard] = useState(false)
    const [methodDebitCard, setMethodDebitCard] = useState(false)
    const [methodMoney, setMethodMoney] = useState(false)

    function handleMethodCreditCard() {
        setMethod("CARTÃO DE CRÉDITO")
        setMethodCreditCard(true)
        setMethodDebitCard(false)
        setMethodMoney(false)
    }

    function handleMethodDebitCard() {
        setMethod("CARTÃO DE DÉBITO")
        setMethodDebitCard(true)
        setMethodCreditCard(false)
        setMethodMoney(false)
    }

    function handleMethodMoney() {
        setMethod("DINHEIRO")
        setMethodMoney(true)
        setMethodCreditCard(false)
        setMethodDebitCard(false)
    }

    return (
        <PaymentMethodContainer>
            <PaymentMethods Method={methodCreditCard} onClick={handleMethodCreditCard} >
                <CreditCard size={16} />
                <ComponentsButtonS>
                    CARTÃO DE CRÉDITO
                </ComponentsButtonS>
            </PaymentMethods>

            <PaymentMethods Method={methodDebitCard} onClick={handleMethodDebitCard}>
                <Bank size={16} />
                <ComponentsButtonS>
                    CARTÃO DE DÉBITO
                </ComponentsButtonS>
            </PaymentMethods>

            <PaymentMethods Method={methodMoney} onClick={handleMethodMoney}>
                <Money size={16} />
                <ComponentsButtonS>
                    DINHEIRO
                </ComponentsButtonS>
            </PaymentMethods>

        </PaymentMethodContainer>
    )
}