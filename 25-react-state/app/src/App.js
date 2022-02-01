import { useState } from 'react';
import './App.css'
import { Footer, Header, Main } from './components'
import { CartItemsContext } from './contexts/cartItems';
import { UserContext } from './contexts/user';

function App() {
  const [user] = useState({
    name: 'Рене Декарт',
    imageSrc: 'https://biographe.ru/wp-content/uploads/2019/11/3423324324-350x350.png',
  });

  const [cartItems, setCartItems] = useState(0);

  const handleBuy = () => {
    setCartItems(old => old + 1);
  }

  // const [count, setCount] = useState(0);

  // const handleIncrement = () => {
  //     // setCount(count + 1); // в очередь задачу сделать count = 1
  //     // setCount(count + 1); // в очередь задачу сделать count = 1
  //     // setCount(count + 1); // в очередь задачу сделать count = 1
  //   // count++;
  //   setCount(old => old + 1); // в очередь задачу сделать count = 1
  //   // setCount(old => old + 1); // в очередь задачу сделать count = 1
  //   // setCount(old => old + 1); // в очередь задачу сделать count = 1
  // };

  return (
    <UserContext.Provider value={user}>
      <CartItemsContext.Provider value={setCartItems}>
        <div className="App">
          <Header cartItems={cartItems} />
          {/* <button onClick={handleIncrement}>Count: {count}</button> */}
          <Main onBuy={handleBuy} />
          <Footer />
        </div>
      </CartItemsContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
