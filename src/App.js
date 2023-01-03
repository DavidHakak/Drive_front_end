import Layout from "./components/Layout";
import "./App.css";
import MainContext from "./context/MainContext";
import { useState } from "react";
import axios from "axios";

function App() {
  const [path, setPath] = useState("");
  const [arrayFiles, setArrayFiles] = useState([]);
  const [arrayFolders, setArrayFolders] = useState([]);

  function getAllFilesInThisFolder() {
    const PORT = "http://localhost:4890/api/";
    axios
      .post(PORT + "folders/readFiles", {
        path: path,
      })
      .then((res) => {
        setArrayFiles(res.data.arrayFiles);
        setArrayFolders(res.data.arrayFolders);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <MainContext.Provider
      value={{
        path,
        setPath,
        arrayFiles,
        setArrayFiles,
        arrayFolders,
        setArrayFolders,
        getAllFilesInThisFolder,
      }}
    >
      <div className="App">
        <Layout />
      </div>
    </MainContext.Provider>
  );
}

export default App;
