import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

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

export default class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await api.get('/products');

    this.setState({
      products: response.data,
    });
  };

  renderProduct = ({ item }) => {
    return (
      <Panel>
        <ProductImage
          source={{
            uri: item.image,
          }}
        />
        <ProductDescription>{item.title}</ProductDescription>
        <ProductPrice>{item.price}</ProductPrice>

        <ButtonAdd>
          <ButtonAmount>
            <Icon name="add-shopping-cart" size={18} color="#FFF" />
            <ButtonAmountText>1</ButtonAmountText>
          </ButtonAmount>
          <TextButtonAdd>Adicionar</TextButtonAdd>
        </ButtonAdd>
      </Panel>
    );
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <FlatList
          horizontal
          keyExtractor={item => String(item.id)}
          data={products}
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
}
