import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Header } from './components/Header';
import Body from './components/Body';
import './App.css';
import { useState } from 'react';

export interface fileInfo extends File {
  name: string;
  size: number;
  type: string;
  relativePath: string;
}

function App() {
  const localStorage = window.localStorage;
  // lazy initiazaliont 
  const [files, setFiles] = useState<FileList[]>(() => {
    if (localStorage.length) {
      const storedArr = JSON.parse(localStorage.getItem("custom-folders"));
      console.log(storedArr)
      return [storedArr.map(y => y)]
    }

    return [];
  });

  const onFoldersSelected = (fls: FileList) => {
    const newFiles = [...files, fls];
    const arrToSave = [];

    newFiles.forEach(fl => {
      for (var i = 0; i < fl.length; i++) {
        const file: fileInfo = {
          lastModified: fl[i].lastModified,
          name: fl[i].name,
          size: fl[i].size,
          type: fl[i].type,
          relativePath: (fl[i] as any).webkitRelativePath,
          ...fl[i]
        }
        arrToSave.push(file)
      }
    });

    localStorage.setItem("custom-folders", JSON.stringify(arrToSave));
    setFiles(newFiles);
  }

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography component="div" style={{ backgroundColor: '#e2e2e2', height: '100vh' }} />
        <Header OnFolderSelected={onFoldersSelected} />
        <Body files={files} />
      </Container>
    </div>
  );
}

export default App;
