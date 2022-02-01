import { useState } from 'react';
import { GoodsList, Form } from '../index.js'
import styles from './styles.module.css'

const Main = () => {
  const [goods, setGoods] = useState([
    {
      title: 'Vegemite',
      description: 'Vegemite (/ˈvɛdʒimaɪt/ VEJ-i-myte) is a thick, dark brown Australian food spread made from leftover brewers yeast extract with various vegetable and spice additives. It was developed by Cyril Callister in Melbourne, Victoria in 1922.',
      price: '20$',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Vegemiteontoast_large.jpg',
    },
    {
      title: 'Special Yo-Yo',
      description: 'A yo-yo (also spelled yoyo) is a toy consisting of an axle connected to two disks, and a string looped around the axle, similar to a spool. It is an ancient toy with proof of existence since 500 BCE. The yo-yo was also called a bandalore in the 17th century.',
      price: '100$',
      imgSrc: 'https://www.mktales.com/wp-content/uploads/2010/07/JTYOYO_big.jpg',
    },
  ]);

  const handleAddGood = good => {
    setGoods([good, ...goods]);
  };

  return <main className={styles.main}>
    <GoodsList goods={goods} />
    <Form onSubmit={handleAddGood} />
  </main>
}

export default Main
