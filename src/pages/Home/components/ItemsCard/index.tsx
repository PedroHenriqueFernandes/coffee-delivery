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
    id: string;
    type: string;
    type2?: string;
    type3?: string;
    img: string;
    title: string;
    subtitle: string;
    amount: number;
}

export function ItemsCard({ id, img, title, subtitle, type, type2, type3 }: ItemsCardProps) {
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
            <Footer 
                value={"9.90"} 
                type={type}
                type2={type2}
                type3={type3}
                img={img}
                title={title}
                subtitle={subtitle}
                amount={0}
                id={id}
            />
        </ItemsCardContainer>
    )
}