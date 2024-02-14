import styles from "./windowcontrols.module.css";

type windowcontrolsProps = {
  on_close?: () => void;
  on_minimize?: () => void;
  on_maximize?: () => void;
};

export const Windowcontrols = ({
  on_close,
  on_minimize,
  on_maximize,
}: windowcontrolsProps) => {
  return (
    <>
      <div className={styles.windowControls}>
        <button className={styles.close} onClick={on_close}></button>
        <button className={styles.minimize} onClick={on_minimize}></button>
        <button className={styles.maximize} onClick={on_maximize}></button>
      </div>
    </>
  );
};

export default Windowcontrols;
