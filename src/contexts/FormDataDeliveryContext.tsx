import { createContext, ReactNode } from "react";
import { FormProvider, useForm, UseFormReturn } from "react-hook-form";

interface FormProvider {
    children: ReactNode;
}

interface defaultValues {
    cep: "";
    street: "";
    district: "";
    city: "";
    state: "";
    number: "";
    complement?: "";
    paymentMethod: "";
}

export const FormDataContext = createContext({} as any);

export function FormDataDeliveryProvider({ children }: FormProvider) {
    const methods = useForm<defaultValues>();

    return (
        <FormDataContext.Provider value={{methods}}>
            {children}
        </FormDataContext.Provider>
    )
}