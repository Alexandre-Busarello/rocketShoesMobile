import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import {
  Container,
  Panel,
  ProductInfo,
  Product,
  ProductImage,
  ProductDetails,
  ProductDescription,
  ProductPrice,
  ProductDelete,
  SubTotalContainer,
  Quantity,
  QuantityDecrement,
  QuantityInput,
  QuantityIncrement,
  SubTotalText,
  Total,
  TotalLabel,
  TotalValue,
  SubmitOrder,
  SubmitText,
  EmptyContainer,
  EmptyText,
} from './styles';

function Cart({ products, total, updateAmountRequest, removeFromCartRequest }) {
  function handleIncrement(id, amount) {
    updateAmountRequest(id, amount + 1);
  }

  function handleDecrement(id, amount) {
    updateAmountRequest(id, amount - 1);
  }

  function handleRemove(id) {
    removeFromCartRequest(id);
  }

  return (
    <Container>
      {products.length ? (
        <Panel>
          {products.map((p, index) => (
            <View key={p.id}>
              <Product index={index}>
                <ProductInfo>
                  <ProductImage
                    source={{
                      uri: p.image,
                    }}
                  />
                  <ProductDetails>
                    <ProductDescription>{p.title}</ProductDescription>
                    <ProductPrice>{p.priceFormatted}</ProductPrice>
                  </ProductDetails>
                  <ProductDelete>
                    <Icon
                      name="delete-forever"
                      size={20}
                      color="#7159c1"
                      onPress={() => handleRemove(p.id)}
                    />
                  </ProductDelete>
                </ProductInfo>
              </Product>
              <SubTotalContainer key={p.id}>
                <Quantity>
                  <QuantityDecrement
                    onPress={() => handleDecrement(p.id, p.amount)}
                  >
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color="#7159c1"
                    />
                  </QuantityDecrement>
                  <QuantityInput readonly value={String(p.amount)} />
                  <QuantityIncrement
                    onPress={() => handleIncrement(p.id, p.amount)}
                  >
                    <Icon name="add-circle-outline" size={20} color="#7159c1" />
                  </QuantityIncrement>
                </Quantity>
                <SubTotalText>{p.subtotal}</SubTotalText>
              </SubTotalContainer>
            </View>
          ))}

          <Total>
            <TotalLabel>TOTAL</TotalLabel>
            <TotalValue>{total}</TotalValue>
          </Total>

          <SubmitOrder>
            <SubmitText>FINALIZAR PEDIDO</SubmitText>
          </SubmitOrder>
        </Panel>
      ) : (
        <Panel>
          <EmptyContainer>
            <Icon name="remove-shopping-cart" size={64} color="#eee" />
            <EmptyText>Seu carrinho está vazio.</EmptyText>
          </EmptyContainer>
        </Panel>
      )}
    </Container>
  );
}

Cart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  total: PropTypes.string.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
  removeFromCartRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  products: state.cart.map(p => ({
    ...p,
    subtotal: formatPrice(p.price * p.amount),
  })),
  total: formatPrice(
    state.cart.reduce((sum, p) => sum + p.price * p.amount, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
