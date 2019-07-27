import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Container,
  LogoContainer,
  Logo,
  Cart,
  CartIcon,
  CartBadge,
} from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  const handleNavigate = (page, params) => {
    if (params) navigation.navigate(page, { params });
    else navigation.navigate(page);
  };

  return (
    <Wrapper>
      <Container>
        <LogoContainer onPress={() => handleNavigate('Home')}>
          <Logo />
        </LogoContainer>
        <Cart onPress={() => handleNavigate('Cart')}>
          <CartIcon />
          <CartBadge>{cartSize}</CartBadge>
        </Cart>
      </Container>
    </Wrapper>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
