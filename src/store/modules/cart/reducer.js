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
    case '@cart/REMOVE_SUCCESS':
      return produce(state, draft => {
        const { id } = action;
        draft.splice(draft.findIndex(p => p.id === id), 1);
      });
    default:
      return state;
  }
}
