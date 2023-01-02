import styles from "./style.module.css";
import { HiOutlinePencil } from "react-icons/hi";
import { RiScissorsFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import { IoInformation } from "react-icons/io5";
function FolderOptions() {
  return (
    <div className={styles.dropupOption}>
      <div className={styles.option}>
        <span className={styles.optionIcone}>
          <HiOutlinePencil />
        </span>
        <span className={styles.optionTitle}>Rename</span>
      </div>
      <div className={styles.option}>
        <span className={styles.optionIcone}>{<RiScissorsFill />}</span>
        <span className={styles.optionTitle}>Cut</span>
      </div>
      <div className={styles.option}>
        <span className={styles.optionIcone}>
          <FaTrash />
        </span>
        <span className={styles.optionTitle}>Delete</span>
      </div>
      <div className={styles.option}>
        <span className={styles.optionIcone}>{<IoInformation />}</span>
        <span className={styles.optionTitle}>Details</span>
      </div>
    </div>
  );
}

export default FolderOptions;
