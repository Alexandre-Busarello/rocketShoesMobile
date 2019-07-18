import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Wrapper, Container, Logo, Cart, CartIcon, CartBadge } from './styles';

function Header({ cartSize }) {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <Cart>
          <CartIcon />
          <CartBadge>{cartSize}</CartBadge>
        </Cart>
      </Container>
    </Wrapper>
  );
}

Header.propTypes = {
  cartSize: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
