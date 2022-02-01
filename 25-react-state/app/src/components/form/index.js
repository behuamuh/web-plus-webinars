import React, { useState } from 'react'
import styles from './styles.module.css'
import Input from '../input'
import Button from '../button'

const initState = {
  title: '',
  description: '',
  price: '',
  imgSrc: '',
};

const Form = ({ onSubmit }) => {
  const [state, setState] = useState(initState);

  const handleChange = e => {
    const { name, value } = e.target;

    setState(old => ({ ...old, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
    setState(initState);
  };

  return <form onSubmit={handleSubmit} className={styles.form}>
    <h2 className={styles.title}>Add new good</h2>
    <Input placeholder='Title' value={state.title} onChange={handleChange} name="title" />
    <Input placeholder='Picture Url' value={state.imgSrc} onChange={handleChange} name="imgSrc" />
    <Input placeholder='Description' value={state.description} onChange={handleChange} name="description" />
    <Input placeholder='Price' value={state.price} onChange={handleChange} name="price" />
    <Button>Submit!</Button>
  </form>
}


export default Form
