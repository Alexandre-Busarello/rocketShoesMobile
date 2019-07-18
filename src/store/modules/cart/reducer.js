import produce from 'immer';

export default function cart(state = [], action) {
  const { type } = action;
  switch (type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { product } = action;
        draft.push(product);
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, draft => {
        const { id, amount } = action;
        const product = draft.find(p => p.id === id);
        product.amount = amount;
      });
    default:
      return state;
  }
}
