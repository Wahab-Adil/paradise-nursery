import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeItem(state, action) {
      const productId = action.payload?.id ?? action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
    },
    updateQuantity(state, action) {
      const { id, quantity, change } = action.payload;
      const item = state.items.find((cartItem) => cartItem.id === id);

      if (!item) return;

      const requestedQuantity = quantity ?? item.quantity + (change ?? 0);
      const nextQuantity = Math.floor(Number(requestedQuantity));

      if (!Number.isFinite(nextQuantity) || nextQuantity <= 0) {
        state.items = state.items.filter((cartItem) => cartItem.id !== id);
      } else {
        item.quantity = nextQuantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) =>
  state.cart.items.reduce((count, item) => count + item.quantity, 0);

export default cartSlice.reducer;
