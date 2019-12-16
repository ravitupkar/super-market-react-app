import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import './App.css';
import Profile from './pages/Profile/Profile';
import Logout from './components/Logout';

const Header = lazy(() => import('./components/Header/Header'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Cart = lazy(() => import('./Cart'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Faq = lazy(() => import('./pages/Faq/Faq'));
const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs'));
const Store = lazy(() => import('./pages/Store/Store'));
const Default = lazy(() => import('./Default'));
const Home = lazy(() => import('./pages/Home/Home'));
const Checkout = lazy(() => import('./pages/Checkout/Checkout'));
const Details = lazy(() => import('./pages/Details/Details'));
const Offers = lazy(() => import('./pages/Offers/Offers'));
const Terms = lazy(() => import('./pages/Terms/Terms'));
const Privacy = lazy(() => import('./pages/Privacy/Privacy'));


function App() {
  return (
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
    <React-Fragment>
      <Header/>
      {/* <Cart/> */}
      <Switch>
          <Route path="/category/:slug">
            <AboutUs />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/details/:id">
            <Details/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/offers">
            <Offers/>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/terms-and-condition">
            <Terms />
          </Route>
          <Route path="/privacy-policy">
            <Privacy />
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route>
            <Default/>
          </Route>
        </Switch>
      <Footer/>
    </React-Frag