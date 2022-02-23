import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.components';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.components';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';

const HatsPage = props => {
  console.log(props);
  return (
    <div>
      <h1>HATS PAGE </h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path ='/' component = {HomePage} />
        <Route path ='/shop' component = {ShopPage}/>
        <Route path ='/signin' component = {SignInAndSignUpPage}/>  
      </Switch>
    </div>
  );
}

export default App;
