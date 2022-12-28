import { PaymentMethodContainer, PaymentMethodCreditcard, PaymentMethodDebitCard, PaymentMethodMoney } from "./styles";
import { CreditCard, Bank, Money } from "phosphor-react"
import { ComponentsButtonS } from "../../../../../../styles/fonts";
import { useState } from "react";


export function PaymentMethod() {
    const CREDIT_CARD = "CARTÃO DE CRÉDITO"
    const DEBIT_CARD = "CARTÃO DE DÉBITO"
    const MONEY = "DINHEIRO"
 
    const [method, setMethod] = useState('')
    function handleMethodCreditCard() {
        setMethod(CREDIT_CARD)
    }

    function handleMethodDebitCard() {
        setMethod(DEBIT_CARD)
    }

    function handleMethodMoney() {
        setMethod(MONEY)
    }

    return (
        <PaymentMethodContainer>
            <PaymentMethodCreditcard Method={method} onClick={handleMethodCreditCard} >
                <CreditCard size={16} />
                <ComponentsButtonS>
                    {CREDIT_CARD}
                </ComponentsButtonS>
            </PaymentMethodCreditcard>

            <PaymentMethodDebitCard Method={method} onClick={handleMethodDebitCard}>
                <Bank size={16} />
                <ComponentsButtonS>
                    {DEBIT_CARD}
                </ComponentsButtonS>
            </PaymentMethodDebitCard>

            <PaymentMethodMoney Method={method} onClick={handleMethodMoney}>
                <Money size={16} />
                <ComponentsButtonS>
                    {MONEY}
                </ComponentsButtonS>
            </PaymentMethodMoney>
        </PaymentMethodContainer>
    )
}