import {
    ContainerTextProduct,
    ItemsCardContainer,
    ItemsCardImage,
    ItemsCardSubtitle,
    ItemsCardTitle,
    AllProductTypes,
    ProductType
} from "./styles";
import { Footer } from "./footer";

interface ItemsCardProps {
    type: string;
    type2?: string;
    type3?: string;
    img: string;
    title: string;
    subtitle: string;
}

export function ItemsCard({ img, title, subtitle, type, type2, type3 }: ItemsCardProps) {
    return (
        <ItemsCardContainer>
            <ItemsCardImage src={img} />
            <AllProductTypes>
                <ProductType>
                    {type}
                </ProductType>
                {type2 && <ProductType>{type2}</ProductType>}
                {type3 && <ProductType>{type3}</ProductType>}
            </AllProductTypes>

            <ContainerTextProduct>
                <ItemsCardTitle>
                    {title}
                </ItemsCardTitle>
                <ItemsCardSubtitle>
                    {subtitle}
                </ItemsCardSubtitle>
            </ContainerTextProduct>
            <Footer value={"9.90"} />
        </ItemsCardContainer>
    )
}