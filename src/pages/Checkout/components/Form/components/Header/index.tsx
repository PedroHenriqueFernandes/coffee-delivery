import { MapPinLine, CurrencyDollar } from "phosphor-react";
import { TextRegularM, TextRegularS } from "../../../../../../styles/fonts";
import { CurrencyDollarContainer, InfoFormContainer, MapPinLineContainer } from "./styles";

interface HeaderProps {
    textRegularM: String;
    textRegularS: String;
    icon?: String;
}

export function Header({ textRegularM, textRegularS, icon }: HeaderProps) {
    return (
        <InfoFormContainer >
            {
                icon === "MapPinLine" ?
                    <MapPinLineContainer>
                        <MapPinLine size={22} />
                    </MapPinLineContainer> :
                    <CurrencyDollarContainer>
                        <CurrencyDollar size={22} />
                    </CurrencyDollarContainer>
            }
            <div>
                <TextRegularM>
                    {textRegularM}
                </TextRegularM>
                <TextRegularS>
                    {textRegularS}
                </TextRegularS>
            </div>
        </InfoFormContainer>
    )
}