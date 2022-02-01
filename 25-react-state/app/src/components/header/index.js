import React, { useContext } from 'react'
import { UserContext } from '../../contexts/user'
import styles from './styles.module.css'

const Header = ({ cartItems }) => {
  const user = useContext(UserContext);

  return <header className={styles.header}>
    <h1 className={styles.title}>The greatest store of all times</h1>
    <div className={styles.userInfo}>
      <span className={styles.userName}>{user.name}</span>
      <img src={user.imageSrc} className={styles.userImage} alt='Рене Декарт' />
      <div className={styles.cart}>
        Cart Items: {cartItems}
      </div>
    </div>
  </header>
}


export default Header
