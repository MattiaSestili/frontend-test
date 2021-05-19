import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Logo from '../assets/logo.svg';

export const Header = (props: { OnFolderSelected: (files: FileList) => void }) => {
  const openExplorer = () => {
    const el = document.createElement("input");
    el.type = "file"
    el.multiple = true;
    (el as any).webkitdirectory = true;
    el.style.display = "none";
    document.getElementById("container")?.appendChild(el);
    
    el.click();
    el.onchange = (event) => {
      const files = (event.target as HTMLInputElement).files;
      props.OnFolderSelected(files);
    }
  }

  return (<div
    id="container"
    style={{
      width: '100%',
      height: '56px',
      display: 'flex',
      position: 'fixed',
      top: 0,
      backgroundColor: 'white',
      padding: '8px 30px 0 0',
      borderBottom: '1px solid #e1e1e3',
    }}
  >
    <Grid container xl={12} direction='row' justify='space-between' alignItems='center'>
      <img src={Logo} alt='logo' style={{ height: '40px' }} />
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='center'
        style={{ gap: '16px', width: '300px' }}
      >
        <Button variant="contained" color="primary" onClick={openExplorer}>Open workspace</Button>
        <Button variant="contained" color="default" onClick={() => { }}>Logout</Button>
      </Grid>
    </Grid>
  </div>
  );
}