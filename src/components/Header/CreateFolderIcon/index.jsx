import styles from "./style.module.css";
import { BsFolderPlus } from "react-icons/bs";
import { useContext, useState } from "react";
import MainContext from "../../../context/MainContext";
import axios from "axios";

function CreateFolderIcon() {
  const PORT = "http://localhost:4890/api/";
  const { path, getAllFilesInThisFolder } = useContext(MainContext);
  const [createFolder, setCreateFolder] = useState(false);
  const [folderName, setFolderName] = useState();

  function handleSubmitFolderName() {
    setCreateFolder(false);
    axios
      .post(PORT + "folders/createFolder", {
        path: path + "/" + folderName,
      })
      .then((res) => {
        getAllFilesInThisFolder();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <span className={`${styles.icon}${styles.createFolder}`}>
      <BsFolderPlus
        onClick={() => {
          setCreateFolder(!createFolder);
        }}
      />
      {createFolder ? (
        <>
          <input
            type="text"
            placeholder="Enter folder name"
            className={styles.popupCreateFolder}
            onChange={(e) => setFolderName(e.target.value)}
          />
          <button
            type="button"
            className={styles.arrowCreateFolder}
            onClick={handleSubmitFolderName}
          >
            ➜
          </button>
        </>
      ) : null}
    </span>
  );
}

export default CreateFolderIcon;
