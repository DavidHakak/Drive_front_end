import styles from "./style.module.css";
import CreateFolderIcon from "../CreateFolderIcon";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineArrowUp } from "react-icons/ai";

import { AiOutlineCloudUpload } from "react-icons/ai";

function Header() {
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
          <span className={`${styles.icon}${styles.goUp}`}>
            <AiOutlineArrowUp />
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
