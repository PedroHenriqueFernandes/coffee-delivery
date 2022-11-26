import { ItemsCard } from "../ItemsCard";
import { ProductContainer, TitleProductsSection } from "./styles";

export function Products() {
    return (
        <>
            <TitleProductsSection>Nossos cafés</TitleProductsSection>
            <ProductContainer>
                <ItemsCard />
            </ProductContainer>
        </>
    )
}