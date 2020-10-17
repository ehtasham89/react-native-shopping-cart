/**
 * Mocking client-server processing
 */
import itemList from './data.json'

const TIMEOUT = 100

export const api = {
  getProducts() {
    return new Promise(resolve => {
      setTimeout(() => resolve(itemList), TIMEOUT)
    })
  }
}