import styles from './Button.module.css';

const Button = ({ children, onClick, variant = 'primary' }) => {
  return (
    <button
      className={${styles.button}  }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
