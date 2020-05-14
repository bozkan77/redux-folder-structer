import React from 'react';
import Dashboard from './Dashboard';
import Navi from '../navigation/Navi';
import { Container } from 'reactstrap';

function App() {
  return (
    <Container className='App'>
      <Navi />
      <Dashboard />
    </Container>
  );
}

export default App;
