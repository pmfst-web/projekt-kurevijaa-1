export const ADD_ITEMS = "ADD_ITEMS";
export const REMOVE_ITEM = "REMOVE_ITEM";


export const addToCart = (item) => {
  return {
    type: ADD_ITEMS,
    item: item,
  }
}
export const removeItem = (item) => {
    return {
      type: REMOVE_ITEM,
      item: item
    }
  }
