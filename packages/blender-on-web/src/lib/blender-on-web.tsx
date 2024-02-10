import styles from './blender-on-web.module.css';

/* eslint-disable-next-line */
export interface BlenderOnWebProps {}

export function BlenderOnWeb(props: BlenderOnWebProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BlenderOnWeb!</h1>
    </div>
  );
}

export default BlenderOnWeb;
