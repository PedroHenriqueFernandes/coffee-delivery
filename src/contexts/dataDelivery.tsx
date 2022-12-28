import { createContext, ReactNode, useState } from "react";

interface FormProvider {
    children: ReactNode;
}

interface FormProps {
    cep: string;
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
    numero: string;
    complemento?: string;
    paymentMethod?: string;
}

interface FormContext {
    dataDelivery: {
        cep: string;
        rua: string;
        bairro: string;
        cidade: string;
        estado: string;
        numero: string;
        complemento?: string;
        paymentMethod?: string;
    },
    handleDataDelivery: (data: FormProps) => void;
}

export const FormContext = createContext({} as FormContext);

export function dataDelivery({ children }: FormProvider) {
    const [dataDelivery, setDataDelivery] = useState({} as FormProps)

    function handleDataDelivery({ cep, rua, bairro, cidade, estado, numero, complemento, paymentMethod }: FormProps) {
        setDataDelivery({
            cep,
            rua,
            bairro,
            cidade,
            estado,
            numero,
            complemento,
            paymentMethod
        })
    }

    return (
        <FormContext.Provider value={{ dataDelivery, handleDataDelivery }}>
            {children}
        </FormContext.Provider>
    )
}