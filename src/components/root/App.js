import React from 'react';
import { Container } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Navi from '../navigation/Navi';
import CartDetail from '../cart/CartDetail';

function App() {
  return (
    <Container className='App'>
      <Navi />
      <Route path='/' exact component={Dashboard} />
      <Route path='/cart' exact component={CartDetail} />
    </Container>
  );
}

export default App;
