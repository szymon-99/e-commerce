import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import {
  AboutPage,
  AuthWrapper,
  CartPage,
  CheckoutPage,
  ErrorPage,
  HomePage,
  PrivateRute,
  ProductsPage,
  SingleProduct,
} from './pages';

function App() {
  return (
    <Router>
      <Sidebar />
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/about' exact>
          <AboutPage />
        </Route>
        <Route path='/cart' exact>
          <CartPage />
        </Route>
        <Route path='/products' exact>
          <ProductsPage />
        </Route>
        <Route path='/products/:id' children={<SingleProduct />} exact></Route>
        <PrivateRute path='/checkout' exact>
          <CheckoutPage />
        </PrivateRute>
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
