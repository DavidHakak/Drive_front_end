import Header from "../Header";
import Main from "../Main";
import styles from "./style.module.css";

function index() {
  return (
    <div className={styles.layout}>
      <Header />
      <Main />
    </div>
  );
}

export default index;
