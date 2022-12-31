import { PaymentMethodContainer, PaymentMethodCreditcard, PaymentMethodDebitCard, PaymentMethodMoney } from "./styles";
import { CreditCard, Bank, Money } from "phosphor-react"
import { ComponentsButtonS } from "../../../../../../styles/fonts";
import { useContext, useState } from "react";
import { FormDataContext } from "../../../../../../contexts/FormDataDeliveryContext";


export function PaymentMethod() {
    const methods = useContext(FormDataContext);
    const CREDIT_CARD = "Cartão de Crédito"
    const DEBIT_CARD = "Cartão de Débito"
    const MONEY = "Dinheiro"
 
    const [method, setMethod] = useState('')
    function handleMethodCreditCard() {
        setMethod(CREDIT_CARD)
        methods.methods.setValue("paymentMethod", CREDIT_CARD)
    }

    function handleMethodDebitCard() {
        setMethod(DEBIT_CARD)
        methods.methods.setValue("paymentMethod", DEBIT_CARD)
    }

    function handleMethodMoney() {
        setMethod(MONEY)
        methods.methods.setValue("paymentMethod", MONEY)
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