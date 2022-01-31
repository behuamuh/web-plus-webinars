import React from 'react'
import styles from './styles.module.css'
import Button from '../button'

const Good = ({ title, imgSrc, description, price }) => {
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
      <Button>Buy</Button>
    </div>
  </li>
}


export default Good