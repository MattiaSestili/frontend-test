import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Logo from '../assets/logo.svg';


const Header: FC = () => (
  <div
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
        <Button variant="contained" color="primary">Open workspace</Button>
        <Button variant="contained" color="default">Logout</Button>
      </Grid>
    </Grid>
  </div>
);

export default Header;