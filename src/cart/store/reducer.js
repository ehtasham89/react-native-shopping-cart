import { ADD_TO_CART, REMOVE_FROM_CART } from './../../products/store/action';
import { getProduct } from './../../products/store/reducer';


const initialState = {}

function quantityById(state = initialState, action) {
  const { productId } = action
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1,
      }
    case REMOVE_FROM_CART:
      const copy = { ...state }
      delete copy[productId]
      return copy
    default:
      return state
  }
}

export function getQuantity(state, productId) {
    return state[productId] || 0
}
  
export function getAddedIds(state) {
    return Object.keys(state)
}

export function getCartProducts(state) {
    return getAddedIds(state.cart).map(id => ({
      ...getProduct(state.products, id),
      quantity: getQuantity(state.cart, id),
    }))
}

export default quantityById;

