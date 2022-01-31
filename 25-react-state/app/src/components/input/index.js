import React from 'react'
import styles from './styles.module.css'

const Input = ({ value = '', type = 'text', onChange, placeholder }) => {
  return <input
    className={styles.input}
    value={value}
    type={type}
    placeholder={placeholder}
    onChange={e => {
      onChange && onChange(e.target.value)
    }}
  />
}


export default Input