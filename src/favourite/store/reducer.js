import { ADD_TO_FAV, REMOVE_FROM_FAV } from './../../products/store/action';
import { getProduct } from './../../products/store/reducer';

const initialState = {
    getFavItemsById: {}
}

function getFavItemsById(state = initialState.getFavItemsById, action) {
  const { productId } = action
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1,
      }
    case REMOVE_FROM_FAV:
      const copy = { ...state }
      delete copy[productId]
      return copy
    default:
      return state
  }
}


export function getAddedIds(state) {
    return Object.keys(state.itemById)
}

export function getFavProducts(state) {
    return getAddedIds(state.fav).map(id => ({
      ...getProduct(state.products, id)
    }))
}

export default getFavItemsById;

