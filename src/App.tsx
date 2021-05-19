import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import Body from './components/Body';
import './App.css';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography component="div" style={{ backgroundColor: '#e2e2e2', height: '100vh' }} />
        <Header />
        <Body />
      </Container>
    </div>
  );
}

export default App;
