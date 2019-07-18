import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
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

class Home extends Component {
  state = {
    products: [],
  };

  static propTypes = {
    addToCartRequest: PropTypes.func.isRequired,
    productsSum: PropTypes.shape().isRequired,
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await api.get('/products');

    const data = response.data.map(p => ({
      ...p,
      priceFormatted: formatPrice(p.price),
    }));

    this.setState({
      products: data,
    });
  };

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
  };

  renderProduct = ({ item }) => {
    const { productsSum } = this.props;
    return (
      <Panel>
        <ProductImage
          source={{
            uri: item.image,
          }}
        />
        <ProductDescription>{item.title}</ProductDescription>
        <ProductPrice>{item.priceFormatted}</ProductPrice>

        <ButtonAdd onPress={() => this.handleAddProduct(item.id)}>
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
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <FlatList
          horizontal
          keyExtractor={item => String(item.id)}
          data={products}
          extraData={this.props}
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  productsSum: state.cart.reduce((amount, p) => {
    const obj = amount;
    obj[String(p.id)] = p.amount;
    return obj;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
