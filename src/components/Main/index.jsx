import styles from "./style.module.css";
import Files from "../Files";
import Folders from "../Folders";

function Main() {
  const arrayFolders = [
    "songs",
    "music",
    "books",
    "photos",
    "A",
    "B",
    "C",
    "D",
  ];
  const arrayFiles = ["A", "B", "C", "D", "E", "F", "G", "H"];
  return (
    <div className={styles.main}>
      <Folders arrayFiles={arrayFiles} arrayFolders={arrayFolders} />
      <Files arrayFiles={arrayFiles} />
    </div>
  );
}

export default Main;
