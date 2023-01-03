import styles from "./style.module.css";
import Files from "../Files";
import Folders from "../Folders";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import MainContext from "../../context/MainContext";

function Main() {
  const { path, setPath, arrayFiles, arrayFolders, getAllFilesInThisFolder } =
    useContext(MainContext);

  useEffect(() => {
    getAllFilesInThisFolder();
  }, [path]);

  return (
    <div className={styles.main}>
      <Folders
        arrayFiles={arrayFiles}
        arrayFolders={arrayFolders}
        path={path}
        setPath={setPath}
      />
      <Files arrayFiles={arrayFiles} />
    </div>
  );
}

export default Main;
