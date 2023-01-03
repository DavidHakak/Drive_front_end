import styles from "./style.module.css";
import CreateFolderIcon from "./CreateFolderIcon";
import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineArrowUp } from "react-icons/ai";

import { AiOutlineCloudUpload } from "react-icons/ai";
import MainContext from "../../context/MainContext";

function Header() {
  const { setPath, path } = useContext(MainContext);
  function goUp() {
    setPath(path.replace(/\/[^/]*$/, ""));
  }
  return (
    <>
      <header className={styles.header}>
        <p className={styles.title}>
          david<span>Drive</span>
        </p>
      </header>
      <div className={styles.navbar}>
        <div className={styles.icons}>
          <span className={`${styles.icon}${styles.burgerMenu}`}>
            <GiHamburgerMenu />
          </span>
          <span className={styles.icone}>
            <AiOutlineCloudUpload />
          </span>

          <CreateFolderIcon />

          <span onClick={goUp} className={`${styles.icon}${styles.goUp}`}>
            <AiOutlineArrowUp />
          </span>
        </div>
        <div className={styles.path}>{path.replace(/\//g, " / ")}</div>
      </div>
    </>
  );
}

export default Header;
