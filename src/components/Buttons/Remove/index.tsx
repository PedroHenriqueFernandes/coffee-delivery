import { Trash } from "phosphor-react";
import { ComponentsButtonS } from "../../../styles/fonts";
import { ButtonRemoveContainer } from "./styles";

export function ButtonRemove() {
    return (
        <ButtonRemoveContainer>
            <Trash />
            <ComponentsButtonS>
                REMOVER
            </ComponentsButtonS>
        </ButtonRemoveContainer>
    )
}