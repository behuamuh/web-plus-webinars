import React from 'react'
import styles from './styles.module.css'

const Input = ({ value = '', type = 'text', name, onChange, placeholder }) => {
  return <input
    className={styles.input}
    value={value}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    name={name}
  />
}


export default Input
