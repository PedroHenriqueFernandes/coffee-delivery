
import { CheckoutCart } from "./components/CheckoutCart";
import { Form } from "./components/Form";
import { Container } from "./styles";

export function Checkout() {
    return (
        <Container>
            <Form />
            <CheckoutCart />
        </Container>
    )
}