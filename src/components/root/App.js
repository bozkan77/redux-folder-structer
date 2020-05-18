import React from 'react';
import { Container } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Navi from '../navigation/Navi';
import CartDetail from '../cart/CartDetail';
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';
import NotFound from '../common/NotFound';

function App() {
  return (
    <Container className='App'>
      <Navi />

      <Route path='/' exact component={Dashboard} />
      <Route path='/cart' exact component={CartDetail} />
      <Route path='/saveproduct' exact component={AddOrUpdateProduct} />
      <Route
        path='/saveproduct/:productId'
        exact
        component={AddOrUpdateProduct}
      />
      <Route exact component={NotFound} />
    </Container>
  );
}

export default App;
