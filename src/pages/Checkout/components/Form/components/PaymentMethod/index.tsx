import { PaymentMethodContainer, PaymentMethods, PaymentMethodsWithBorder } from "./styles";
import { CreditCard, Bank, Money } from "phosphor-react"
import { ComponentsButtonS } from "../../../../../../styles/fonts";
import { useState } from "react";

export function PaymentMethod() {
    const [method, setMethod] = useState('')

    function handleMethodCreditCard() {
        setMethod("CARTÃO DE CRÉDITO")
    }

    function handleMethodDebitCard() {
        setMethod("CARTÃO DE DÉBITO")
    }

    function handleMethodMoney() {
        setMethod("DINHEIRO")
    }

    return (
        <PaymentMethodContainer>
            {method === "CARTÃO DE CRÉDITO" ?
                <PaymentMethodsWithBorder onClick={handleMethodCreditCard} >
                    <CreditCard size={16} />
                    <ComponentsButtonS>
                        CARTÃO DE CRÉDITO
                    </ComponentsButtonS>
                </PaymentMethodsWithBorder>
                :
                <PaymentMethods onClick={handleMethodCreditCard} >
                    <CreditCard size={16} />
                    <ComponentsButtonS>
                        CARTÃO DE CRÉDITO
                    </ComponentsButtonS>
                </PaymentMethods>
            }

            {method === "CARTÃO DE DÉBITO" ?
                <PaymentMethodsWithBorder onClick={handleMethodDebitCard}>
                    <Bank size={16} />
                    <ComponentsButtonS>
                        CARTÃO DE DÉBITO
                    </ComponentsButtonS>
                </PaymentMethodsWithBorder>
                :
                <PaymentMethods onClick={handleMethodDebitCard}>
                    <Bank size={16} />
                    <ComponentsButtonS>
                        CARTÃO DE DÉBITO
                    </ComponentsButtonS>
                </PaymentMethods>
            }

            {method === "DINHEIRO" ?
                <PaymentMethodsWithBorder onClick={handleMethodMoney}>
                    <Money size={16} />
                    <ComponentsButtonS>
                        DINHEIRO
                    </ComponentsButtonS>
                </PaymentMethodsWithBorder>
                :
                <PaymentMethods onClick={handleMethodMoney}>
                    <Money size={16} />
                    <ComponentsButtonS>
                        DINHEIRO
                    </ComponentsButtonS>
                </PaymentMethods>
            }
        </PaymentMethodContainer>
    )
}