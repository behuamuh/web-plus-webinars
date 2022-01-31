import { GoodsList, Form } from '../index.js'
import styles from './styles.module.css'

const Main = () => {
  return <main className={styles.main}>
    <GoodsList />
    <Form />
  </main>
}

export default Main