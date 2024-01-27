import styles from './page.module.css';
import { Button } from '@portfolio/share-ui';

export default async function Index() {
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <Button />
        </div>
      </div>
    </div>
  );
}
