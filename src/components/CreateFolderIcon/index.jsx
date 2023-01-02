import styles from "./style.module.css";
import { BsFolderPlus } from "react-icons/bs";
import { useState } from "react";

function CreateFolderIcon() {
  const [createFolder, setCreateFolder] = useState(false);
  const [folderName, setFolderName] = useState();

  function handleSubmitFolderName(e) {
    console.log(folderName);
    setCreateFolder(false);
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
            onClick={(e) => handleSubmitFolderName(e)}
          >
            ➜
          </button>
        </>
      ) : null}
    </span>
  );
}

export default CreateFolderIcon;
