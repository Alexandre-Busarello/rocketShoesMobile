import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/images/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex-direction: row;
  background: #000;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const Cart = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CartIcon = styled(Icon).attrs({
  name: 'shopping-basket',
  size: 24,
  color: '#FFF',
})``;

export const CartBadge = styled.Text`
  position: absolute;
  top: -6px;
  left: 14px;
  color: #fff;
  background: #7159c1;
  border-radius: 9px;
  height: 18px;
  width: 18px;
  font-size: 12px;
  padding: 1px;
  text-align: center;
`;
