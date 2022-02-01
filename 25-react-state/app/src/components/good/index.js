import React, { memo, useContext } from 'react'
import styles from './styles.module.css'
import Button from '../button'
import { CartItemsContext } from '../../contexts/cartItems'

const Good = ({ title, imgSrc, description, price }) => {
  const setCartItems = useContext(CartItemsContext);

  console.log('good');

  const handleBuy = () => {
    setCartItems(old => old + 1);
  };

  return <li className={styles.good}>
    <img className={styles.image} alt={title} src={imgSrc} />
    <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>
        {description}
      </p>
      <p className={styles.price}>
        <strong>Price:</strong> {price}
      </p>
      <Button onClick={handleBuy}>Buy</Button>
    </div>
  </li>
}


export default memo(Good)
