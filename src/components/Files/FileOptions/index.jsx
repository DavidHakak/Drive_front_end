import styles from "./style.module.css";
import { HiOutlinePencil } from "react-icons/hi";
import { MdContentCopy } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { IoInformation } from "react-icons/io5";
import { HiOutlineDownload } from "react-icons/hi";

function FileOptions() {
  return (
    <div className={styles.dropupOption}>
      <div className={styles.option}>
        <span className={styles.optionIcone}>
          <HiOutlinePencil />
        </span>
        <span className={styles.optionTitle}>Rename</span>
      </div>
      <div className={styles.option}>
        <span className={styles.optionIcone}>
          <MdContentCopy />
        </span>
        <span className={styles.optionTitle}>Copy / Cut</span>
      </div>
      <div className={styles.option}>
        <span className={styles.optionIcone}>
          <FaTrash />
        </span>
        <span className={styles.optionTitle}>Delete</span>
      </div>
      <div className={styles.option}>
        <span className={styles.optionIcone}>
          <IoInformation />
        </span>
        <span className={styles.optionTitle}>Details</span>
      </div>
      <div className={styles.option}>
        <span className={styles.optionIcone}>
          <HiOutlineDownload />
        </span>
        <span className={styles.optionTitle}>Download</span>
      </div>
    </div>
  );
}

export default FileOptions;
