import styles from "./style.module.css";
import { BsFolder } from "react-icons/bs";
import { AiOutlineMore } from "react-icons/ai";
import { useContext, useState } from "react";
import FolderMenuPopup from "./FolderMenuPopup";
import MainContext from "../../context/MainContext";
import axios from "axios";

function Folders(props) {
  const { path, getAllFilesInThisFolder } = useContext(MainContext);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [renameIsOpen, setRenameIsOpen] = useState(false);
  const [newName, setNewName] = useState("");

  function openFolderMenu(folderName) {
    setMenuIsOpen((prevState) => ({
      ...prevState,
      [folderName]: !prevState[folderName],
    }));
  }

  function updateNewName(e) {
    setNewName(e.target.value);
  }

  function newPath(e) {
    props.setPath(props.path + "/" + e.target.id);
  }

  function renameFolder(folderName) {
    setRenameIsOpen(false);
    console.log(path + "/" + folderName);
    const PORT = "http://localhost:4890/api/";
    axios
      .put(PORT + "folders/renameFolder", {
        path: path + "/" + folderName,
        newName: path + "/" + newName,
      })
      .then(() => {
        getAllFilesInThisFolder();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className={styles.foldersContainer}>
      <div className={styles.foldersTitle}> Folders </div>
      <div className={styles.folderInnerContainer}>
        {props.arrayFolders.map((folderName) => {
          return (
            <div
              onDoubleClick={(e) => newPath(e)}
              id={folderName}
              className={styles.folder}
            >
              <span
                onMouseLeave={() => {
                  setMenuIsOpen(false);
                }}
              >
                <AiOutlineMore onClick={() => openFolderMenu(folderName)} />
                {menuIsOpen[folderName] && (
                  <FolderMenuPopup
                    folderName={folderName}
                    setMenuIsOpen={setMenuIsOpen}
                    setRenameIsOpen={setRenameIsOpen}
                  />
                )}
                {renameIsOpen[folderName] && (
                  <>
                    <input
                      type="text"
                      placeholder="Enter new name"
                      className={styles.popupRenameFolder}
                      onChange={(e) => updateNewName(e)}
                    />
                    <button
                      type="button"
                      className={styles.arrowRenameFolder}
                      onClick={() => renameFolder(folderName)}
                    >
                      ➜
                    </button>
                  </>
                )}
              </span>
              {folderName}
              <span>
                <BsFolder />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Folders;
