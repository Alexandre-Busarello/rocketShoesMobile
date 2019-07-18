import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #333;
`;

export const Panel = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
  max-height: 380px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductDescription = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 18px;
  line-height: 20px;
  color: #333;
  margin-top: 5px;
`;

export const ProductPrice = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 5px 0 20px;
  color: #000;
`;

export const ButtonAdd = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
  background: #7159c1;
  height: 40px;
`;

export const ButtonAmount = styled.View`
  align-items: center;
  flex-direction: row;
  background: rgba(0, 0, 0, 0.1);
  height: 40px;
  border-radius: 4px;
  padding: 10px;
`;

export const ButtonAmountText = styled.Text`
  color: #fff;
  margin-left: 4px;
`;

export const TextButtonAdd = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
