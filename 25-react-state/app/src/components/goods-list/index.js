import React from 'react'
import styles from './styles.module.css'
import Good from '../good'

const GoodsList = ({ goods, onBuy }) => {
  return <ul className={styles.goods}>
    {goods.map(({ title, description, price, imgSrc }) => (
      <Good
        key={title}
        title={title}
        description={description}
        price={price}
        imgSrc={imgSrc}
        onBuy={onBuy}
      />
    ))}
  </ul>
}


export default GoodsList
