
import styles from '../assets/Button.module.css';

const ButtonLink = ({ id, name, onClick, isActive }) => (
 <button className={isActive  ? styles['classActive'] : ''} onClick={onClick}>
  <span className={styles['link-span']}></span><span className={isActive ? styles['classActive'] : ''}>{name}</span>
 </button>
);

export default ButtonLink;


