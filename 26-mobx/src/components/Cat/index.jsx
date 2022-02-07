import styles from './styles.module.css'

const baseUrl = 'https://cataas.com/cat/';

const Cat = ({ cat, onClick }) => (
  <img
    src={`${baseUrl}${cat.id}`}
    alt={`Cat with id: ${cat.id}`}
    className={styles.cat}
    onClick={() => onClick(cat.id)}
  />
)

export default Cat
