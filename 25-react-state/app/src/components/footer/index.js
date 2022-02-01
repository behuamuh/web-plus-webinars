import React, { useContext } from 'react'
import { UserContext } from '../../contexts/user'
import styles from './styles.module.css'

const Footer = () => {
  const user = useContext(UserContext);

  return <footer className={styles.footer}>
    Welcome to store, {user.name}, (c) 2021
  </footer>
}


export default Footer
