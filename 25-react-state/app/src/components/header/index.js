import React from 'react'
import styles from './styles.module.css'

const Header = () => {
  return <header className={styles.header}>
    <h1 className={styles.title}>The greatest store of all times</h1>
    <div className={styles.userInfo}>
      <span className={styles.userName}>Рене Декарт</span>
      <img src='https://biographe.ru/wp-content/uploads/2019/11/3423324324-350x350.png' className={styles.userImage} alt='Рене Декарт' />
      <div className={styles.cart}>
        Cart Items: 0
      </div>
    </div>
  </header>
}


export default Header
