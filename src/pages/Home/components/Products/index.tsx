import { coffees } from "./coffees.js";
import { ItemsCard } from "../ItemsCard";
import { ProductContainer, TitleProductsSection } from "./styles";

export function Products() {
    return (
        <>
            <TitleProductsSection>Nossos cafés</TitleProductsSection>
            <ProductContainer>
                {
                    coffees.map((coffee) => {
                        return(
                            <ItemsCard
                                type={coffee.type.toUpperCase()}
                                type2={coffee.type2?.toUpperCase()}
                                img={coffee.img}
                                title={coffee.title}
                                subtitle={coffee.subtitle}
                            />
                        )
                    })
                }
            </ProductContainer>
        </>
    )
}