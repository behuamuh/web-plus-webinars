import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import Good from './components/good'

import { addItem, deleteItem, getAllItems } from './store/shop/actions'
import { cartAddItem } from './store/user/actions'
import { useEffect } from 'react';
import cartTotal from './selectors/cart-total';

function App({ items, loading, addItem, cart, getAllItems, cartAddItem, cartTotal }) {
  useEffect(() => {
    getAllItems();
  }, []);

  console.log(cartTotal);

  const submit = evt => {
    evt.preventDefault()
    const form = evt.target
    const { title, price, img } = form.elements
    addItem({
      title: title.value,
      img: img.value,
      price: price.value
    })
  }
  return (
    <div className="App">
      <header className="AppHeader">
        <h1 >SUPER MEGA STORE</h1>
        <div>Cart Items: {cart.length}</div>
      </header>
      <main>
        {loading ? 'Loading...' : (
          items.map(item => {
            return <Good {...item} onClick={() => cartAddItem(item)} />
          })
        )}
      </main>
      <form className='AppForm' onSubmit={submit}>
        <input name='title' placeholder='Title' />
        <input name='img' placeholder='IMG' />
        <input name='price' placeholder='Price' />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

const mapStateToProps = ({ shop, user }) => {
  return {
    loading: shop.loading,
    items: shop.data,
    cart: user.cart,
    cartTotal: cartTotal(user)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAllItems: () => {
      dispatch(getAllItems())
    },
    addItem: (item) => {
      dispatch(addItem(item))
    },
    onDecrement: (id) => {
      dispatch(deleteItem(id))
    },
    cartAddItem: (item) => {
      dispatch(cartAddItem(item))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
