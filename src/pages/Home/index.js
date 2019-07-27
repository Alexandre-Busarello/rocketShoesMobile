import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  Panel,
  ProductImage,
  ProductDescription,
  ProductPrice,
  ButtonAdd,
  ButtonAmount,
  ButtonAmountText,
  TextButtonAdd,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const productsSum = useSelector(state =>
    state.cart.reduce((amount, p) => {
      const obj = amount;
      obj[String(p.id)] = p.amount;
      return obj;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('/products');

      const data = response.data.map(p => ({
        ...p,
        priceFormatted: formatPrice(p.price),
      }));

      setProducts(data);
    }
    getProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function renderProduct({ item }) {
    return (
      <Panel>
        <ProductImage
          source={{
            uri: item.image,
          }}
        />
        <ProductDescription>{item.title}</ProductDescription>
        <ProductPrice>{item.priceFormatted}</ProductPrice>

        <ButtonAdd onPress={() => handleAddProduct(item.id)}>
          <ButtonAmount>
            <Icon name="add-shopping-cart" size={18} color="#FFF" />
            <ButtonAmountText>
              {productsSum[String(item.id)] || 0}
            </ButtonAmountText>
          </ButtonAmount>
          <TextButtonAdd>Adicionar</TextButtonAdd>
        </ButtonAdd>
      </Panel>
    );
  }

  return (
    <Container>
      <FlatList
        horizontal
        keyExtractor={item => String(item.id)}
        data={products}
        extraData={productsSum}
        renderItem={renderProduct}
      />
    </Container>
  );
}
