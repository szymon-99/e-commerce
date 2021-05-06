import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions';

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { id, product, color, amount } = action.payload;
      const tempItem = state.cart.find((item) => item.id === id + color);
      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + color) {
            let newAmount = cartItem.amount + amount;
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max;
            }
            return { ...cartItem, amount: newAmount };
          }
          return cartItem;
        });
        return { ...state, cart: tempCart };
      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          img: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    }
    case CLEAR_CART:
      return { ...state, cart: [] };

    case REMOVE_CART_ITEM: {
      const tempCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: tempCart };
    }
    case TOGGLE_CART_ITEM_AMOUNT: {
      const { id, value } = action.payload;
      const tempCart = state.cart.map((item) => {
        if (item.id === id) {
          let newAmount;
          if (value === 'inc') {
            newAmount = item.amount + 1;
            if (newAmount > item.max) {
              newAmount = item.max;
            }
            return { ...item, amount: newAmount };
          }
          if (value === 'dec') {
            newAmount = item.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...item, amount: newAmount };
          }
        }
        return item;
      });

      return { ...state, cart: tempCart };
    }
    case COUNT_CART_TOTALS: {
      const { total_amount, total_items } = state.cart.reduce(
        (total, cartItem) => {
          const { price, amount } = cartItem;
          total.total_items += amount;
          total.total_amount += price * amount;

          return total;
        },
        {
          total_items: 0,
          total_amount: 0,
        }
      );
      return { ...state, total_amount, total_items };
    }
    // no default
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
