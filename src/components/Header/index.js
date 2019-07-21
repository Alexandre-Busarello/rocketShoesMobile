import React from 'react';
import { connect } from 'react-redux';
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

function Header({ navigation, cartSize }) {
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
  cartSize: PropTypes.number.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
