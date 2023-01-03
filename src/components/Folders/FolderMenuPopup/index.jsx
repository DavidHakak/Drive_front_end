import styles from "./style.module.css";
import { HiOutlinePencil } from "react-icons/hi";
import { RiScissorsFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import { IoInformation } from "react-icons/io5";
import { useContext } from "react";
import MainContext from "../../../context/MainContext";
import axios from "axios";

function FolderMenuPopup(props) {
  const { path, getAllFilesInThisFolder } = useContext(MainContext);

  function deleteFolder() {
    console.log(path + "/" + props.folderName);
    const PORT = "http://localhost:4890/api/";
    axios
      .delete(PORT + "folders/deleteFolder", {
        data: {
          path: path + "/" + props.folderName,
        },
      })
      .then(() => {
        getAllFilesInThisFolder();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function changePopups(folderName) {
    props.setMenuIsOpen(false);
    props.setRenameIsOpen((prevState) => ({
      ...prevState,
      [folderName]: !prevState[folderName],
    }));
  }

  return (
    <div className={styles.dropupOption}>
      <div
        className={styles.option}
        onClick={() => changePopups(props.folderName)}
      >
        <span className={styles.optionIcone}>
          <HiOutlinePencil />
        </span>
        <span className={styles.optionTitle}>Rename</span>
      </div>

      <div className={styles.option}>
        <span className={styles.optionIcone}>
          <RiScissorsFill />
        </span>
        <span className={styles.optionTitle}>Cut</span>
      </div>

      <div className={styles.option} onClick={deleteFolder}>
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
    </div>
  );
}

export default FolderMenuPopup;
