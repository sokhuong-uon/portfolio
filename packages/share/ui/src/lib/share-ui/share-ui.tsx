import styles from './share-ui.module.css';

/* eslint-disable-next-line */
export interface ShareUiProps {}

export function ShareUi(props: ShareUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ShareUi!</h1>
    </div>
  );
}

export default ShareUi;
