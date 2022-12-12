import { coffees } from "./coffees.js";
import { ItemsCard } from "../ItemsCard";
import { ProductContainer, TitleProductsSection } from "./styles";
import { v4 as uuidv4 } from 'uuid';

export function Products() {
    return (
        <>
            <TitleProductsSection>Nossos cafés</TitleProductsSection>
            <ProductContainer>
                {
                    coffees.map((coffee) => {
                        return(
                            <ItemsCard
                                key={uuidv4()}
                                id={uuidv4()}
                                type={coffee.type.toUpperCase()}
                                type2={coffee.type2?.toUpperCase()}
                                type3={coffee.type3?.toUpperCase()}
                                img={coffee.img}
                                title={coffee.title}
                                subtitle={coffee.subtitle}
                                amount={0}
                            />
                        )
                    })
                }
            </ProductContainer>
        </>
    )
}