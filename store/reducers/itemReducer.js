import { PRODUCTS } from '../../services/ProductsService.js'

const initialState = {
    items: PRODUCTS,
  }
  
  const productsReducer = (state = initialState, action) => {
    switch (action.type) {  
      default:
        return state;
      }
  }
  
  export default productsReducer;