import React from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
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

export default function Cart() {
  const products = useSelector(state =>
    state.cart.map(p => ({
      ...p,
      subtotal: formatPrice(p.price * p.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(state.cart.reduce((sum, p) => sum + p.price * p.amount, 0))
  );

  const dispatch = useDispatch();

  function handleIncrement(id, amount) {
    dispatch(CartActions.updateAmountRequest(id, amount + 1));
  }

  function handleDecrement(id, amount) {
    dispatch(CartActions.updateAmountRequest(id, amount - 1));
  }

  function handleRemove(id) {
    dispatch(CartActions.removeFromCartRequest(id));
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
