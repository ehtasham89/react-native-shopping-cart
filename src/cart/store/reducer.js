import { ADD_TO_CART, REMOVE_FROM_CART } from './../../products/store/action';
import { getProduct } from './../../products/store/reducer';


const initialState = {
  quantityById: {}
}

function quantityById(state = initialState.quantityById, action) {
  const { productId } = action
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1,
      }
    case REMOVE_FROM_CART:
      const qty = (state[productId] || 0) - 1
      const copy = { ...state }
      if (qty > 0) copy[productId] = qty
      else delete copy[productId]
      return copy
    default:
      return state
  }
}

export function getQuantity(state, productId) {
    return state.quantityById[productId] || 0
}
  
export function getAddedIds(state) {
    return Object.keys(state.quantityById)
}

export function getCartProducts(state) {
    return getAddedIds(state.cart).map(id => ({
      ...getProduct(state.products, id),
      quantity: getQuantity(state.cart, id),
    }))
}

export default quantityById;

