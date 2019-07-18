import React from 'react';
import { Wrapper, Container, Logo, Cart, CartIcon, CartBadge } from './styles';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <Cart>
          <CartIcon />
          <CartBadge>3</CartBadge>
        </Cart>
      </Container>
    </Wrapper>
  );
}
