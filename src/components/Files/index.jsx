import styles from "./style.module.css";
import { AiOutlineFileJpg } from "react-icons/ai";
import { AiOutlineMore } from "react-icons/ai";
import { useState } from "react";
import FileOptions from "../FileOptions";

function Files(props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(folderName) {
    setIsOpen((prevState) => ({
      ...prevState,
      [folderName]: !prevState[folderName],
    }));
  }
  return (
    <div className={styles.filesContainer}>
      <div className={styles.filesTitle}> files </div>

      <div className={styles.fileInnerContainer}>
        {props.arrayFiles.map((fileName) => {
          return (
            <div className={styles.file}>
              <span
                onMouseLeave={() => {
                  setIsOpen(false);
                }}
              >
                <AiOutlineMore onClick={() => handleClick(fileName)} />
                {isOpen[fileName] && <FileOptions />}
              </span>
              {fileName}
              <span>
                <AiOutlineFileJpg className={styles.icons} />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Files;
