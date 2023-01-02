import styles from "./style.module.css";
import { BsFolder } from "react-icons/bs";
import { AiOutlineMore } from "react-icons/ai";
import { useState } from "react";
import FolderOptions from "../FolderOption";

function Folders(props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(folderName) {
    setIsOpen((prevState) => ({
      ...prevState,
      [folderName]: !prevState[folderName],
    }));
  }
  return (
    <div className={styles.foldersContainer}>
      <div className={styles.foldersTitle}> Folders </div>
      <div className={styles.folderInnerContainer}>
        {props.arrayFolders.map((folderName) => {
          return (
            <div className={styles.folder}>
              <span
                onMouseLeave={() => {
                  setIsOpen(false);
                }}
              >
                <AiOutlineMore onClick={() => handleClick(folderName)} />
                {isOpen[folderName] && <FolderOptions />}
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
