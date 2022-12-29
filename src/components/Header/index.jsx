import styles from "./style.module.css";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BsFolderPlus } from "react-icons/bs";
import { AiOutlineCloudUpload } from "react-icons/ai";

function Header() {
  const [isMenu, setIsMenu] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const [isCreateFolder, setIsCreateFolder] = useState(false);
  const [isStapBack, setIsStapBack] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <p className={styles.title}>
          david<span>Drive</span>
        </p>
      </header>
      <div className={styles.navbar}>
        <div className={styles.icons}>
          <span
            className={styles.menu}
            onClick={() => {
              setIsMenu(!isMenu);
            }}
          >
            <GiHamburgerMenu />
            {isMenu ? <div></div> : ""}
          </span>
          <span className={styles.upload}>
            {" "}
            <AiOutlineCloudUpload />{" "}
          </span>
          <span className={styles.create_folder}>
            {" "}
            <BsFolderPlus />{" "}
          </span>
          <span className={styles.step_back}>
            {" "}
            <AiOutlineArrowUp />{" "}
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
