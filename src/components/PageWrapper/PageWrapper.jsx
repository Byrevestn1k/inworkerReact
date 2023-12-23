import styles from './page-wrapper.module.css';

const PageWrapper = ({ children }) => {
  return <div className={styles['common']}>{children}</div>;
};

export default PageWrapper;