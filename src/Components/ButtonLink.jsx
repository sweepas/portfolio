import styles from "../assets/Button.module.css";

const ButtonLink = ({ id, name, onClick, activeButton }) => (
  <button
    className={activeButton === id ? styles["classActive"] : ""}
    onClick={onClick}
  >
    <span className={styles["link-span"]}></span>
    <span>{name}</span>
  </button>
);

export default ButtonLink;
