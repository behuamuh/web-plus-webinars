import { createSelector } from 'reselect'

const selectTax = user => user.tax
const selectCart = user => user.cart

const selectSubtotal = createSelector(selectCart, cart =>
  cart.reduce((acc, item) => acc + item.price, 0)
)

const totalTax = createSelector(
  selectSubtotal,
  selectTax,
  (subtotal, tax) => subtotal * tax / 100,
);

const cartTotal = createSelector(
  selectSubtotal,
  totalTax,
  (subtotal, tax) => subtotal + tax,
)

export default cartTotal;
