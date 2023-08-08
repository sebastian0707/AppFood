import { styled } from "styled-components";


const Container = styled.header`
    background: #d73035;
`;

export function Header() {
    return (
        <Container>
            <div className="page-details">
                <h1>Pedidos</h1>
                <h2>Acompanhamento de Pedidos</h2>
            </div>
        </Container>
    );
}