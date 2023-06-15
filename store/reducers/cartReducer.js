import {REMOVE_ITEM, ADD_ITEMS} from "../actions/cartActions.js";


const initialState = {
  cart: [],
  totalPrice: 0,
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEMS: 
    console.log("Cart:",state.cart);
    const o = state.cart.find( x => x.id === action.item.id)
    if (!o) {
      return {cart: [...state.cart, action.item], totalPrice: state.totalPrice + action.item.price}
    }
    else {
      return {totalPrice: state.totalPrice + action.item.price, cart: state.cart.map(x=> x.id == o.id ? {...o,
        quantity: o.quantity +1 } : x)} }
  
    case REMOVE_ITEM:
        //const d = state.cart.reduce ((a,v)=>v.id == action.item ? a + v.quantity*v.price : a+ 0, 0) [...state.cart]
        const p = state.cart.find(x=> x.id == action.item)
        p.quantity = p.quantity - 1
        return {
          cart: p.quantity == 0 ? state.cart.filter(x => x.id != p.id) : state.cart.map(x => x),
          totalPrice: state.totalPrice - p.price};
   
    default:
      return state;
    }
    
}

export default cartReducer;