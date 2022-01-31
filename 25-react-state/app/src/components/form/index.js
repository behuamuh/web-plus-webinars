import React from 'react'
import styles from './styles.module.css'
import Input from '../input'
import Button from '../button'

const Form = () => {
  return <form className={styles.form}>
    <h2 className={styles.title}>Add new good</h2>
    <Input placeholder='Title' />
    <Input placeholder='Picture Url' />
    <Input placeholder='Description' />
    <Input placeholder='Price' />
    <Button>Submit!</Button>
  </form>
}


export default Form