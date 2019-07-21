import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #333;
`;

export const Panel = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin-top: 0;
  margin: 15px;
`;

export const Product = styled.View`
  margin-top: ${props => (props.index > 0 ? '15px' : '0')};
  flex-direction: row;
  align-items: center;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductDescription = styled.Text``;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductDelete = styled.TouchableOpacity`
  padding: 6px;
`;

export const SubTotalContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background: #eee;
  padding: 8px;
  border-radius: 4px;
  justify-content: space-between;
`;

export const Quantity = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const QuantityDecrement = styled.TouchableOpacity``;

export const QuantityInput = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
`;

export const QuantityIncrement = styled.TouchableOpacity``;

export const SubTotalText = styled.Text``;

export const Total = styled.View`
  margin-top: 15px;
  align-items: center;
  flex-direction: column;
`;

export const TotalLabel = styled.Text`
  font-size: 20px;
  color: #777;
`;

export const TotalValue = styled.Text`
  font-size: 32px;
  color: #000;
`;

export const SubmitOrder = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  margin-top: 20px;
  align-items: center;
  flex-direction: row;
  border-radius: 4px;
  background: #7159c1;
  height: 40px;
`;

export const SubmitText = styled.Text`
  flex: 1;
  text-align: center;
  align-items: center;
  font-weight: bold;
  color: #fff;
`;

export const EmptyContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 18px;
`;
